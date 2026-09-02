const snippets = [
  {
    title: "Neon Text",
    type: "css",
    code: `.neon{
  color:#ff8c00;
  text-shadow:
    0 0 5px #ff8c00,
    0 0 15px #ff8c00,
    0 0 30px #ff8c00;
}`,
    preview: `<span class="neon" style="font-size:2rem;font-weight:bold;">NEON</span>`
  },
  {
    title: "Hover Glow",
    type: "css",
    code: `.glow:hover{
  box-shadow:
    0 0 10px #ff8c00,
    0 0 30px #ffd54a;
}`,
    preview: `<div class="glow" style="display:inline-block;padding:20px 30px;background:#ff8c00;border-radius:12px;color:white;font-weight:bold;">Hover me</div>`
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
    preview: `<div class="center" style="height:80px;"><span style="color:#ff8c00;font-weight:bold;">Centered!</span></div>`
  },
  {
    title: "Animated Gradient",
    type: "css",
    code: `.grad{
  background:linear-gradient(
    270deg,
    #ff8c00,#ffd54a,#ffb733,#ff9e2c
  );
  background-size:400% 400%;
  animation:gradient 8s ease infinite;
}

@keyframes gradient{
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}`,
    preview: `<div style="height:80px;border-radius:12px;background:linear-gradient(270deg,#ff8c00,#ffd54a,#ffb733,#ff9e2c);background-size:400% 400%;animation:gradient 8s ease infinite;"></div>`
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
    preview: `<div class="float" style="display:inline-block;font-size:2rem;">📦</div>`
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
    preview: `<div class="pulse" style="display:inline-block;padding:20px 30px;background:linear-gradient(135deg,#ff8c00,#ffd54a);border-radius:12px;color:#4a2000;font-weight:bold;">Pulse</div>`
  },
  {
    title: "Rainbow Border",
    type: "css",
    code: `.rainbow{
  border:4px solid;
  border-image:linear-gradient(
    90deg,#ff8c00,#ffd54a,#ffb733,#ff9e2c
  ) 1;
}`,
    preview: `<div class="rainbow" style="display:inline-block;padding:20px 30px;color:#ff8c00;font-weight:bold;">Rainbow!</div>`
  },
  {
    title: "Image Zoom",
    type: "css",
    code: `.zoom{overflow:hidden;border-radius:12px}
.zoom img{transition:.4s}
.zoom:hover img{transform:scale(1.15)}`,
    preview: `<div class="zoom" style="display:inline-block;overflow:hidden;border-radius:12px;">
<img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&w=200" style="width:150px;display:block;">
</div>`
  },
  {
    title: "Button Press",
    type: "css",
    code: `button{transition:.15s}
button:active{transform:scale(.92)}`,
    preview: `<button style="padding:14px 28px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;font-weight:bold;cursor:pointer;">Press me</button>`
  },
  {
    title: "Typing Text",
    type: "css",
    code: `.typing{
  width:fit-content;
  overflow:hidden;
  white-space:nowrap;
  border-right:3px solid #ff8c00;
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
    preview: `<div class="typing" style="color:#ff8c00;font-size:1.5rem;font-weight:bold;">Hello World!</div>`
  },
  {
    title: "Loading Spinner",
    type: "css",
    code: `.spinner{
  width:40px;height:40px;
  border:5px solid #ffd54a;
  border-top-color:#ff8c00;
  border-radius:50%;
  animation:spin 1s linear infinite;
}

@keyframes spin{
  to{transform:rotate(360deg)}
}`,
    preview: `<div class="spinner"></div>`
  },
  {
    title: "Card Hover",
    type: "css",
    code: `.card{transition:.3s}
.card:hover{
  transform:translateY(-10px);
  box-shadow:0 15px 30px rgba(255,140,0,.25);
}`,
    preview: `<div class="card" style="display:inline-block;padding:25px;background:white;border:1px solid rgba(255,140,0,.2);border-radius:16px;color:#ff8c00;font-weight:bold;">Hover this card</div>`
  },
  {
    title: "Glass Button",
    type: "css",
    code: `.glass-button{
  background:rgba(255,255,255,.4);
  border:1px solid rgba(255,255,255,.6);
  backdrop-filter:blur(10px);
  color:#4a2000;
  padding:12px 24px;
  border-radius:12px;
  font-weight:bold;
  cursor:pointer;
}`,
    preview: `<div style="background:linear-gradient(135deg,#ff8c00,#ffd54a);padding:30px;text-align:center;">
<button class="glass-button">Glass Button</button>
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
    90deg,#ff8c00,#ffd54a,#ffb733
  );
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}`,
    preview: `<span class="gradient-text" style="font-size:2rem;font-weight:bold;">Gradient Text</span>`
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
    preview: `<div class="shake" style="display:inline-block;padding:20px 30px;background:linear-gradient(135deg,#ff8c00,#ffd54a);border-radius:12px;color:#4a2000;font-weight:bold;">Hover & Shake</div>`
  },
  {
    title: "Blur Background",
    type: "css",
    code: `.blur{
  backdrop-filter:blur(15px);
  background:rgba(255,255,255,.4);
}`,
    preview: `<div style="background:linear-gradient(135deg,#ff8c00,#ffd54a);padding:20px;text-align:center;">
<div class="blur" style="padding:20px;border-radius:12px;color:#4a2000;font-weight:bold;">Blurred glass panel</div>
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
    preview: `<div class="card-3d" style="display:inline-block;padding:25px;background:linear-gradient(135deg,#ff8c00,#ffd54a);border-radius:16px;color:#4a2000;font-weight:bold;">Hover for 3D</div>`
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
  background:#ff8c00;
  transition:.3s;
}

.link:hover::after{width:100%}`,
    preview: `<a class="link" href="javascript:void(0)" style="color:#ff8c00;text-decoration:none;font-size:1.2rem;font-weight:bold;">Hover this link</a>`
  },
  {
    title: "Color Changing Button",
    type: "html",
    code: `<button id="colorBtn">Click to change color</button>

<script>
const btn = document.getElementById("colorBtn");
const colors = ["#ff8c00","#ffd54a","#ff4d4d","#2ecc71","#8be9fd"];
let i = 0;
btn.addEventListener("click", () => {
  i = (i + 1) % colors.length;
  btn.style.background = colors[i];
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
    title: "Counter",
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
<div id="counter" style="font-size:2.5rem;font-weight:bold;color:#ff8c00;margin-bottom:15px;">0</div>
<button id="up" style="padding:10px 20px;border:none;border-radius:10px;background:#ff8c00;color:white;cursor:pointer;margin:4px;font-weight:bold;">+1</button>
<button id="down" style="padding:10px 20px;border:none;border-radius:10px;background:#ffd54a;color:#4a2000;cursor:pointer;margin:4px;font-weight:bold;">-1</button>
</div>
<script>
var count=0;
var display=document.getElementById("counter");
document.getElementById("up").onclick=function(){count++;display.textContent=count;};
document.getElementById("down").onclick=function(){count--;display.textContent=count;};
</script>`
  },
  {
    title: "Digital Clock",
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
    preview: `<div id="clock" style="font-size:2rem;font-weight:bold;color:#ff8c00;text-align:center;font-family:Courier New,monospace;"></div>
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
    title: "Toggle Show/Hide",
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
<p id="secret" style="display:none;color:#ff8c00;margin-top:15px;font-size:1.2rem;font-weight:bold;">You found the secret!</p>
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
    title: "Random Quote Generator",
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
<blockquote id="quote" style="font-size:1.3rem;color:#ff8c00;margin-bottom:15px;font-style:italic;">Click the button!</blockquote>
<button id="newQuote" style="padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;">New Quote</button>
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
    title: "Text to Speech",
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
<input id="text" placeholder="Type something..." style="padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;width:80%;font-size:14px;color:#4a3206;margin-bottom:10px;">
<button id="speak" style="padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;">Speak</button>
</div>
<script>
document.getElementById("speak").onclick=function(){
  var text=document.getElementById("text").value;
  var u=new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(u);
};
</script>`
  },
  {
    title: "To-Do List",
    type: "html",
    code: `<input id="todoInput" placeholder="Add a task...">
<button id="addTodo">Add</button>
<ul id="todoList"></ul>

<script>
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

document.getElementById("addTodo").onclick = () => {
  if(input.value.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = input.value;
  li.style.cursor = "pointer";
  li.onclick = () => li.remove();
  list.appendChild(li);
  input.value = "";
};
</script>`,
    preview: `<div style="text-align:center;">
<input id="todoInput" placeholder="Add a task..." style="padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;width:70%;font-size:14px;color:#4a3206;margin-bottom:10px;">
<button id="addTodo" style="padding:10px 18px;border:none;border-radius:10px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;">Add</button>
<ul id="todoList" style="list-style:none;padding:0;margin-top:15px;text-align:left;"></ul>
</div>
<script>
var input=document.getElementById("todoInput");
var list=document.getElementById("todoList");
document.getElementById("addTodo").onclick=function(){
  if(input.value.trim()==="")return;
  var li=document.createElement("li");
  li.textContent=input.value;
  li.style.padding="8px 12px";
  li.style.margin="4px 0";
  li.style.background="rgba(255,140,0,.1)";
  li.style.borderRadius="8px";
  li.style.cursor="pointer";
  li.onclick=function(){li.remove();};
  list.appendChild(li);
  input.value="";
};
</script>`
  },
  {
    title: "Dice Roller",
    type: "html",
    code: `<div id="dice">🎲</div>
<button id="roll">Roll Dice</button>

<script>
document.getElementById("roll").onclick = () => {
  const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  const roll = Math.floor(Math.random() * 6);
  document.getElementById("dice").textContent = faces[roll];
};
</script>`,
    preview: `<div style="text-align:center;">
<div id="dice" style="font-size:3rem;margin-bottom:15px;">🎲</div>
<button id="roll" style="padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;">Roll Dice</button>
</div>
<script>
document.getElementById("roll").onclick=function(){
  var faces=["⚀","⚁","⚂","⚃","⚄","⚅"];
  var roll=Math.floor(Math.random()*6);
  document.getElementById("dice").textContent=faces[roll];
};
</script>`
  },
  {
    title: "Progress Bar",
    type: "html",
    code: `<div id="bar" style="width:0;height:30px;
  background:linear-gradient(90deg,#ff8c00,#ffd54a);
  border-radius:15px;transition:width .3s;">
</div>
<button id="fill">Fill Progress</button>

<script>
let progress = 0;
document.getElementById("fill").onclick = () => {
  progress = Math.min(progress + 20, 100);
  document.getElementById("bar").style.width = progress + "%";
};
</script>`,
    preview: `<div style="text-align:center;">
<div style="width:100%;height:30px;background:rgba(255,140,0,.15);border-radius:15px;margin-bottom:15px;overflow:hidden;">
<div id="bar" style="width:0;height:100%;background:linear-gradient(90deg,#ff8c00,#ffd54a);border-radius:15px;transition:width .3s;"></div>
</div>
<button id="fill" style="padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;">Fill Progress</button>
</div>
<script>
var progress=0;
document.getElementById("fill").onclick=function(){
  progress=Math.min(progress+20,100);
  document.getElementById("bar").style.width=progress+"%";
};
</script>`
  },
  {
    title: "Image Gallery",
    type: "html",
    code: `<img id="gallery" src="photo1.jpg" style="width:200px;">
<button id="prev">Previous</button>
<button id="next">Next</button>

<script>
const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg"
];
let current = 0;
document.getElementById("next").onclick = () => {
  current = (current + 1) % images.length;
  document.getElementById("gallery").src = images[current];
};
document.getElementById("prev").onclick = () => {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("gallery").src = images[current];
};
</script>`,
    preview: `<div style="text-align:center;">
<img id="gallery" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&w=200" style="width:180px;border-radius:12px;margin-bottom:10px;">
<div>
<button id="prev" style="padding:8px 16px;border:none;border-radius:10px;background:#ffd54a;color:#4a2000;cursor:pointer;font-weight:bold;margin:4px;">Previous</button>
<button id="next" style="padding:8px 16px;border:none;border-radius:10px;background:#ff8c00;color:white;cursor:pointer;font-weight:bold;margin:4px;">Next</button>
</div>
</div>
<script>
var images=[
"https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&w=200",
"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&w=200",
"https://images.pexels.com/photos/45170/pexels-photo-45170.jpeg?auto=compress&w=200"
];
var current=0;
document.getElementById("next").onclick=function(){
  current=(current+1)%images.length;
  document.getElementById("gallery").src=images[current];
};
document.getElementById("prev").onclick=function(){
  current=(current-1+images.length)%images.length;
  document.getElementById("gallery").src=images[current];
};
</script>`
  },
  {
    title: "Tip Calculator",
    type: "html",
    code: `<input id="bill" placeholder="Bill amount" type="number">
<select id="tip">
  <option value="0.10">10%</option>
  <option value="0.15">15%</option>
  <option value="0.20">20%</option>
</select>
<button id="calc">Calculate</button>
<p id="result"></p>

<script>
document.getElementById("calc").onclick = () => {
  const bill = parseFloat(document.getElementById("bill").value) || 0;
  const tip = parseFloat(document.getElementById("tip").value);
  const total = bill + bill * tip;
  document.getElementById("result").textContent =
    "Total: $" + total.toFixed(2);
};
</script>`,
    preview: `<div style="text-align:center;">
<input id="bill" placeholder="Bill amount" type="number" style="padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;width:70%;font-size:14px;color:#4a3206;margin-bottom:10px;">
<select id="tip" style="padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;font-size:14px;color:#4a3206;margin-bottom:10px;">
<option value="0.10">10%</option>
<option value="0.15" selected>15%</option>
<option value="0.20">20%</option>
</select>
<button id="calc" style="padding:10px 18px;border:none;border-radius:10px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;">Calculate</button>
<p id="result" style="margin-top:15px;color:#ff8c00;font-weight:bold;font-size:1.2rem;"></p>
</div>
<script>
document.getElementById("calc").onclick=function(){
  var bill=parseFloat(document.getElementById("bill").value)||0;
  var tip=parseFloat(document.getElementById("tip").value);
  var total=bill+bill*tip;
  document.getElementById("result").textContent="Total: $"+total.toFixed(2);
};
</script>`
  },
  {
    title: "Stopwatch",
    type: "html",
    code: `<div id="display">00:00</div>
<button id="start">Start</button>
<button id="stop">Stop</button>
<button id="reset">Reset</button>

<script>
let seconds = 0, timer = null;
const display = document.getElementById("display");

function format(s){
  const m = Math.floor(s/60).toString().padStart(2,"0");
  const sec = (s%60).toString().padStart(2,"0");
  return m + ":" + sec;
}
document.getElementById("start").onclick = () => {
  if(timer) return;
  timer = setInterval(() => {
    seconds++;
    display.textContent = format(seconds);
  }, 1000);
};
document.getElementById("stop").onclick = () => {
  clearInterval(timer);
  timer = null;
};
document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  display.textContent = "00:00";
};
</script>`,
    preview: `<div style="text-align:center;">
<div id="display" style="font-size:2.5rem;font-weight:bold;color:#ff8c00;font-family:Courier New,monospace;margin-bottom:15px;">00:00</div>
<button id="start" style="padding:10px 18px;border:none;border-radius:10px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold;margin:3px;">Start</button>
<button id="stop" style="padding:10px 18px;border:none;border-radius:10px;background:#ffd54a;color:#4a2000;cursor:pointer;font-weight:bold;margin:3px;">Stop</button>
<button id="reset" style="padding:10px 18px;border:none;border-radius:10px;background:rgba(255,140,0,.2);color:#4a2000;cursor:pointer;font-weight:bold;margin:3px;">Reset</button>
</div>
<script>
var seconds=0,timer=null;
var display=document.getElementById("display");
function format(s){
  var m=Math.floor(s/60).toString().padStart(2,"0");
  var sec=(s%60).toString().padStart(2,"0");
  return m+":"+sec;
}
document.getElementById("start").onclick=function(){
  if(timer)return;
  timer=setInterval(function(){seconds++;display.textContent=format(seconds);},1000);
};
document.getElementById("stop").onclick=function(){clearInterval(timer);timer=null;};
document.getElementById("reset").onclick=function(){clearInterval(timer);timer=null;seconds=0;display.textContent="00:00";};
</script>`
  },
  {
    title: "Accordions",
    type: "html",
    code: `<div class="accordion">
  <h3 class="acc-header">Click to expand</h3>
  <p class="acc-body">Hidden content!</p>
</div>

<style>
.acc-body{display:none;padding:10px;}
.acc-header{cursor:pointer;color:#ff8c00;}
</style>

<script>
document.querySelector(".acc-header").onclick = () => {
  const body = document.querySelector(".acc-body");
  body.style.display = body.style.display === "block" ? "none" : "block";
};
</script>`,
    preview: `<div style="text-align:left;">
<div class="accordion">
<h3 class="acc-header" style="cursor:pointer;color:#ff8c00;padding:10px;background:rgba(255,140,0,.1);border-radius:10px;margin-bottom:5px;">Click to expand</h3>
<p class="acc-body" style="display:none;padding:10px;color:#7a5c1a;">Hidden content! This is an accordion that expands and collapses when you click the header.</p>
</div>
</div>
<script>
document.querySelector(".acc-header").onclick=function(){
  var body=document.querySelector(".acc-body");
  body.style.display=body.style.display==="block"?"none":"block";
};
</script>`
  }
];
