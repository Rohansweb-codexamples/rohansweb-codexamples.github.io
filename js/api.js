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
      sessionStorage.setItem('rw_redirect', window.location.pathname);
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
      sessionStorage.setItem('rw_redirect', window.location.pathname);
      window.location.href = 'login.html';
      return false;
    }
    return true;
  },

  getRedirect() {
    const url = sessionStorage.getItem('rw_redirect');
    sessionStorage.removeItem('rw_redirect');
    return url || 'dashboard.html';
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
    var user = this.getUser();
    if (user) {
      if (user.role === 'admin' || user.role === 'super_admin') return true;
      if (user.role === 'student') return (user.products || []).includes(slug);
      if (user.role === 'user') return true;
    }
    try {
      var products = await this.call('/api/products');
      var product = products.find(function(p) { return p.slug === slug; });
      return !!(product && product.hasAccess);
    } catch (e) {
      return false;
    }
  },

  async updateProfile(data) {
    var result = await this.call('/api/me/profile', { method: 'PUT', body: data });
    if (result.success && result.user) {
      var current = this.getUser();
      this.setUser(Object.assign({}, current, result.user));
    }
    return result;
  },

  async getDocuments() {
    return this.call('/api/documents');
  },

  async createDocument(title, content, type) {
    return this.call('/api/documents', { method: 'POST', body: { title: title, content: content, type: type } });
  },

  async getDocument(id) {
    return this.call('/api/documents/' + id);
  },

  async updateDocument(id, title, content) {
    return this.call('/api/documents/' + id, { method: 'PUT', body: { title: title, content: content } });
  },

  async deleteDocument(id) {
    return this.call('/api/documents/' + id, { method: 'DELETE' });
  }
};
