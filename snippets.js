const snippets = [
  {
    title: "Neon Text",
    type: "css",
    code: `.neon{
  color:white;
  text-shadow:
    0 0 5px cyan,
    0 0 15px cyan,
    0 0 30px cyan;
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<span class="neon" style="font-size:2rem;font-weight:bold;">NEON</span>
</div>`
  },
  {
    title: "Hover Glow",
    type: "css",
    code: `.glow:hover{
  box-shadow:
    0 0 10px #fff,
    0 0 30px #ff00ff;
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<div class="glow" style="display:inline-block;padding:20px 30px;background:#222;border-radius:12px;color:white;">Hover me</div>
</div>`
  },
  {
    title: "Smooth Scrolling",
    type: "css",
    code: `html{
  scroll-behavior:smooth;
}`,
    preview: null
  },
  {
    title: "Center Anything",
    type: "css",
    code: `.center{
  display:flex;
  justify-content:center;
  align-items:center;
}`,
    preview: `<div style="background:#111;padding:30px;height:100px;">
<div class="center" style="height:100%;"><span style="color:white;">Centered!</span></div>
</div>`
  },
  {
    title: "Animated Gradient",
    type: "css",
    code: `body{
  background:linear-gradient(
    270deg,
    orange,red,yellow,pink
  );
  background-size:400% 400%;
  animation:gradient 8s ease infinite;
}

@keyframes gradient{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`,
    preview: `<div style="height:100px;border-radius:12px;background:linear-gradient(270deg,orange,red,yellow,pink);background-size:400% 400%;animation:gradient 8s ease infinite;"></div>`
  },
  {
    title: "Floating Animation",
    type: "css",
    code: `.float{
  animation:float 3s ease-in-out infinite;
}

@keyframes float{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-15px)}
}`,
    preview: `<div style="background:#111;padding:40px 30px;text-align:center;">
<div class="float" style="display:inline-block;font-size:2rem;">📦</div>
</div>`
  },
  {
    title: "Pulse Effect",
    type: "css",
    code: `.pulse{
  animation:pulse 1.5s infinite;
}

@keyframes pulse{
  50%{transform:scale(1.08)}
}`,
    preview: `<div style="background:#111;padding:40px 30px;text-align:center;">
<div class="pulse" style="display:inline-block;padding:20px 30px;background:#ff8c00;border-radius:12px;color:white;font-weight:bold;">Pulse</div>
</div>`
  },
  {
    title: "Rainbow Border",
    type: "css",
    code: `.rainbow{
  border:4px solid;
  border-image:linear-gradient(
    90deg,red,orange,yellow,
    green,blue,purple
  ) 1;
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<div class="rainbow" style="display:inline-block;padding:20px 30px;color:white;">Rainbow!</div>
</div>`
  },
  {
    title: "Image Zoom",
    type: "css",
    code: `.zoom{overflow:hidden}
.zoom img{transition:.4s}
.zoom:hover img{transform:scale(1.15)}`,
    preview: `<div style="background:#111;padding:20px;text-align:center;">
<div class="zoom" style="display:inline-block;border-radius:12px;overflow:hidden;">
<img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&w=200" style="width:150px;display:block;">
</div>
</div>`
  },
  {
    title: "Button Press",
    type: "css",
    code: `button{transition:.15s}
button:active{transform:scale(.92)}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<button style="padding:14px 28px;border:none;border-radius:12px;background:#ff8c00;color:white;font-weight:bold;cursor:pointer;">Press me</button>
</div>`
  },
  {
    title: "Typing Text",
    type: "css",
    code: `.typing{
  width:fit-content;
  overflow:hidden;
  white-space:nowrap;
  border-right:3px solid;
  animation:
    typing 4s steps(30),
    blink .7s infinite;
}

@keyframes typing{
  from{width:0}
}

@keyframes blink{
  50%{border-color:transparent}
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<div class="typing" style="color:white;font-size:1.5rem;">Hello World!</div>
</div>`
  },
  {
    title: "Loading Spinner",
    type: "css",
    code: `.spinner{
  width:40px;height:40px;
  border:5px solid #ddd;
  border-top-color:#ff4500;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin{
  to{transform:rotate(360deg)}
}`,
    preview: `<div style="background:#111;padding:40px;text-align:center;">
<div class="spinner" style="margin:auto;"></div>
</div>`
  },
  {
    title: "Card Hover",
    type: "css",
    code: `.card{transition:.3s}
.card:hover{
  transform:translateY(-10px);
  box-shadow:0 15px 30px rgba(0,0,0,.25);
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<div class="card" style="display:inline-block;padding:25px;background:#222;border-radius:16px;color:white;">Hover this card</div>
</div>`
  },
  {
    title: "Glass Button",
    type: "css",
    code: `.glass-button{
  background:rgba(255,255,255,.15);
  border:1px solid rgba(255,255,255,.3);
  backdrop-filter:blur(10px);
  color:white;
  padding:12px 24px;
  border-radius:12px;
}`,
    preview: `<div style="background:linear-gradient(135deg,#ff8c00,#ff4d4d);padding:30px;text-align:center;">
<button class="glass-button" style="cursor:pointer;font-size:1rem;">Glass Button</button>
</div>`
  },
  {
    title: "Hide Scrollbar",
    type: "css",
    code: `.hide-scrollbar{
  overflow:auto;
  scrollbar-width:none;
}
.hide-scrollbar::-webkit-scrollbar{
  display:none;
}`,
    preview: null
  },
  {
    title: "Gradient Text",
    type: "css",
    code: `.gradient-text{
  background:linear-gradient(
    90deg,orange,red,yellow
  );
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<span class="gradient-text" style="font-size:2rem;font-weight:bold;">Gradient Text</span>
</div>`
  },
  {
    title: "Shake Animation",
    type: "css",
    code: `.shake:hover{animation:shake .4s}

@keyframes shake{
  0%,100%{transform:translateX(0)}
  25%{transform:translateX(-6px)}
  75%{transform:translateX(6px)}
}`,
    preview: `<div style="background:#111;padding:40px 30px;text-align:center;">
<div class="shake" style="display:inline-block;padding:20px 30px;background:#ff8c00;border-radius:12px;color:white;font-weight:bold;">Hover & Shake</div>
</div>`
  },
  {
    title: "Blur Background",
    type: "css",
    code: `.blur{
  backdrop-filter:blur(15px);
  background:rgba(255,255,255,.12);
}`,
    preview: `<div style="background:linear-gradient(135deg,#ff8c00,#ff4d4d);padding:20px;text-align:center;">
<div class="blur" style="padding:20px;border-radius:12px;color:white;">Blurred glass panel</div>
</div>`
  },
  {
    title: "3D Card",
    type: "css",
    code: `.card-3d{
  transition:.4s;
  transform-style:preserve-3d;
}

.card-3d:hover{
  transform:
    perspective(700px)
    rotateX(8deg)
    rotateY(-8deg)
    translateY(-5px);
}`,
    preview: `<div style="background:#111;padding:30px;text-align:center;">
<div class="card-3d" style="display:inline-block;padding:25px;background:linear-gradient(135deg,#ff8c00,#ffd54a);border-radius:16px;color:#222;font-weight:bold;">Hover for 3D</div>
</div>`
  },
  {
    title: "Animated Underline",
    type: "css",
    code: `.link{position:relative}

.link::after{
  content:"";
  position:absolute;
  left:0;bottom:-4px;
  width:0;height:3px;
  background:currentColor;
  transition:.3s;
}

.link:hover::after{width:100%}`,
    preview: `<div style="background:#111;padding:40px 30px;text-align:center;">
<a class="link" href="javascript:void(0)" style="color:#ffd54a;text-decoration:none;font-size:1.2rem;">Hover this link</a>
</div>`
  },
  {
    title: "Color Changing Button (HTML+JS)",
    type: "html",
    code: `<button id="colorBtn">Click to change color</button>

<script>
const btn = document.getElementById("colorBtn");
const colors = ["#ff8c00","#ffd54a","#ff4d4d","#2ecc71","#8be9fd"];
let i = 0;
btn.addEventListener("click", () => {
  i = (i + 1) % colors.length;
  btn.style.background = colors[i];
  btn.style.color = "#fff";
});
</script>`,
    preview: `<button id="colorBtn" style="padding:14px 24px;border:none;border-radius:12px;background:#ff8c00;color:white;font-weight:bold;cursor:pointer;font-size:1rem;">Click to change color</button>
<script>
var btn=document.getElementById("colorBtn");
var colors=["#ff8c00","#ffd54a","#ff4d4d","#2ecc71","#8be9fd"];
var i=0;
btn.addEventListener("click",function(){
  i=(i+1)%colors.length;
  btn.style.background=colors[i];
});
</script>`
  },
  {
    title: "Counter (HTML+JS)",
    type: "html",
    code: `<div id="counter">0</div>
<button id="up">+1</button>
<button id="down">-1</button>

<script>
let count = 0;
const display = document.getElementById("counter");
document.getElementById("up").onclick = () => {
  count++;
  display.textContent = count;
};
document.getElementById("down").onclick = () => {
  count--;
  display.textContent = count;
};
</script>`,
    preview: `<div style="text-align:center;">
<div id="counter" style="font-size:2.5rem;font-weight:bold;color:#ffd54a;margin-bottom:15px;">0</div>
<button id="up" style="padding:10px 20px;border:none;border-radius:10px;background:#ff8c00;color:white;cursor:pointer;margin:4px;font-weight:bold;">+1</button>
<button id="down" style="padding:10px 20px;border:none;border-radius:10px;background:#ff4d4d;color:white;cursor:pointer;margin:4px;font-weight:bold;">-1</button>
</div>
<script>
var count=0;
var display=document.getElementById("counter");
document.getElementById("up").onclick=function(){count++;display.textContent=count;};
document.getElementById("down").onclick=function(){count--;display.textContent=count;};
</script>`
  },
  {
    title: "Digital Clock (HTML+JS)",
    type: "html",
    code: `<div id="clock"></div>

<script>
function updateClock(){
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
</script>`,
    preview: `<div id="clock" style="font-size:2rem;font-weight:bold;color:#ffd54a;text-align:center;font-family:Courier New,monospace;"></div>
<script>
function updateClock(){
  var now=new Date();
  document.getElementById("clock").textContent=now.toLocaleTimeString();
}
setInterval(updateClock,1000);
updateClock();
</script>`
  },
  {
    title: "Toggle Show/Hide (HTML+JS)",
    type: "html",
    code: `<button id="toggle">Show Secret</button>
<p id="secret" style="display:none">
  You found the secret!
</p>

<script>
const btn = document.getElementById("toggle");
const secret = document.getElementById("secret");
btn.addEventListener("click", () => {
  if(secret.style.display === "none"){
    secret.style.display = "block";
    btn.textContent = "Hide Secret";
  } else {
    secret.style.display = "none";
    btn.textContent = "Show Secret";
  }
});
</script>`,
    preview: `<div style="text-align:center;">
<button id="toggle" style="padding:12px 22px;border:none;border-radius:12px;background:#ff8c00;color:white;cursor:pointer;font-weight:bold;">Show Secret</button>
<p id="secret" style="display:none;color:#ffd54a;margin-top:15px;font-size:1.2rem;">You found the secret!</p>
</div>
<script>
var btn=document.getElementById("toggle");
var secret=document.getElementById("secret");
btn.addEventListener("click",function(){
  if(secret.style.display==="none"){
    secret.style.display="block";
    btn.textContent="Hide Secret";
  }else{
    secret.style.display="none";
    btn.textContent="Show Secret";
  }
});
</script>`
  },
  {
    title: "Random Quote Generator (HTML+JS)",
    type: "html",
    code: `<blockquote id="quote">Click the button!</blockquote>
<button id="newQuote">New Quote</button>

<script>
const quotes = [
  "Stay curious.",
  "Build something today.",
  "Code is poetry.",
  "Keep it simple.",
  "Learn by doing."
];
document.getElementById("newQuote").onclick = () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = q;
};
</script>`,
    preview: `<div style="text-align:center;">
<blockquote id="quote" style="font-size:1.3rem;color:#ffd54a;margin-bottom:15px;font-style:italic;">Click the button!</blockquote>
<button id="newQuote" style="padding:12px 22px;border:none;border-radius:12px;background:#ff8c00;color:white;cursor:pointer;font-weight:bold;">New Quote</button>
</div>
<script>
var quotes=["Stay curious.","Build something today.","Code is poetry.","Keep it simple.","Learn by doing."];
document.getElementById("newQuote").onclick=function(){
  var q=quotes[Math.floor(Math.random()*quotes.length)];
  document.getElementById("quote").textContent=q;
};
</script>`
  },
  {
    title: "Text to Speech (HTML+JS)",
    type: "html",
    code: `<input id="text" placeholder="Type something...">
<button id="speak">Speak</button>

<script>
document.getElementById("speak").onclick = () => {
  const text = document.getElementById("text").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};
</script>`,
    preview: `<div style="text-align:center;">
<input id="text" placeholder="Type something..." style="padding:10px;border:none;border-radius:10px;width:80%;font-size:14px;color:#333;margin-bottom:10px;">
<button id="speak" style="padding:12px 22px;border:none;border-radius:12px;background:#ff8c00;color:white;cursor:pointer;font-weight:bold;">Speak</button>
</div>
<script>
document.getElementById("speak").onclick=function(){
  var text=document.getElementById("text").value;
  var u=new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(u);
};
</script>`
  }
];
