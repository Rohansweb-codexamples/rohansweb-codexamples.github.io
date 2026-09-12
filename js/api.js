window.API = {
  getToken() { return localStorage.getItem('rw_token'); },
  setToken(t) { localStorage.setItem('rw_token', t); },
  removeToken() { localStorage.removeItem('rw_token'); },
  getUser() { try { return JSON.parse(localStorage.getItem('rw_user')); } catch { return null; } },
  setUser(u) { localStorage.setItem('rw_user', JSON.stringify(u)); },
  clearUser() { localStorage.removeItem('rw_user'); },
  isLoggedIn() { return !!this.getToken(); },

  async call(path, options = {}) {
    const token = this.getToken();
    const res = await fetch(path, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: 'Bearer ' + token } : {})
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    const data = await res.json();
    if (res.status === 401) {
      this.removeToken();
      this.clearUser();
      window.location.href = 'login.html';
      throw new Error('Session expired');
    }
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
  },

  async login(login, password) {
    const data = await this.call('/api/auth/login', { method: 'POST', body: { login, password } });
    this.setToken(data.token);
    this.setUser(data.user);
    return data;
  },

  async signup(email, password) {
    const data = await this.call('/api/auth/signup', { method: 'POST', body: { email, password } });
    this.setToken(data.token);
    this.setUser(data.user);
    return data;
  },

  logout() {
    this.removeToken();
    this.clearUser();
    window.location.href = 'login.html';
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  requireRole(...roles) {
    const user = this.getUser();
    if (!user || !roles.includes(user.role)) {
      window.location.href = 'dashboard.html';
      return false;
    }
    return true;
  },

  async checkProduct(slug) {
    try {
      const products = await this.call('/api/products');
      const product = products.find(p => p.slug === slug);
      return !!(product && product.hasAccess);
    } catch {
      return false;
    }
  }
};
