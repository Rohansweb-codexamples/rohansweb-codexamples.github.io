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
    270deg,#ff8c00,#ffd54a,#ffb733,#ff9e2c
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
  animation:typing 4s steps(30),blink .7s infinite;
}
@keyframes typing{from{width:0}}
@keyframes blink{50%{border-color:transparent}}`,
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
@keyframes spin{to{transform:rotate(360deg)}}`,
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
.hide-scrollbar::-webkit-scrollbar{display:none}`,
    preview: null
  },
  {
    title: "Gradient Text",
    type: "css",
    code: `.gradient-text{
  background:linear-gradient(90deg,#ff8c00,#ffd54a,#ffb733);
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
  transform:perspective(700px) rotateX(8deg) rotateY(-8deg) translateY(-5px);
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
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
  }
  #colorBtn{
    padding:14px 24px;
    border:none;
    border-radius:12px;
    background:#ff8c00;
    color:white;
    font-weight:bold;
    cursor:pointer;
    font-size:1rem;
    transition:.2s;
  }
</style>
</head>
<body>
<button id="colorBtn">Click to change color</button>
<script>
  var btn = document.getElementById("colorBtn");
  var colors = ["#ff8c00","#ffd54a","#ff4d4d","#2ecc71","#8be9fd"];
  var i = 0;
  btn.addEventListener("click", function(){
    i = (i + 1) % colors.length;
    btn.style.background = colors[i];
  });
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Counter",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  #counter{font-size:2.5rem;font-weight:bold;color:#ff8c00;margin-bottom:15px}
  button{padding:10px 20px;border:none;border-radius:10px;cursor:pointer;font-weight:bold;margin:4px}
  #up{background:#ff8c00;color:white}
  #down{background:#ffd54a;color:#4a2000}
</style>
</head>
<body>
<div id="counter">0</div>
<button id="up">+1</button>
<button id="down">-1</button>
<script>
  var count = 0;
  var display = document.getElementById("counter");
  document.getElementById("up").onclick = function(){
    count++;
    display.textContent = count;
  };
  document.getElementById("down").onclick = function(){
    count--;
    display.textContent = count;
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Digital Clock",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Courier New,monospace;
  }
  #clock{font-size:2rem;font-weight:bold;color:#ff8c00}
</style>
</head>
<body>
<div id="clock"></div>
<script>
  function updateClock(){
    var now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Toggle Show/Hide",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  #toggle{padding:12px 22px;border:none;border-radius:12px;background:#ff8c00;color:white;cursor:pointer;font-weight:bold}
  #secret{color:#ff8c00;margin-top:15px;font-size:1.2rem;font-weight:bold}
</style>
</head>
<body>
<button id="toggle">Show Secret</button>
<p id="secret" style="display:none">You found the secret!</p>
<script>
  var btn = document.getElementById("toggle");
  var secret = document.getElementById("secret");
  btn.addEventListener("click", function(){
    if(secret.style.display === "none"){
      secret.style.display = "block";
      btn.textContent = "Hide Secret";
    } else {
      secret.style.display = "none";
      btn.textContent = "Show Secret";
    }
  });
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Random Quote Generator",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
    text-align:center;
  }
  #quote{font-size:1.3rem;color:#ff8c00;margin-bottom:15px;font-style:italic}
  #newQuote{padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold}
</style>
</head>
<body>
<blockquote id="quote">Click the button!</blockquote>
<button id="newQuote">New Quote</button>
<script>
  var quotes = ["Stay curious.","Build something today.","Code is poetry.","Keep it simple.","Learn by doing."];
  document.getElementById("newQuote").onclick = function(){
    var q = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = q;
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Text to Speech",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
    text-align:center;
  }
  #text{padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;width:80%;font-size:16px;color:#4a3206;margin-bottom:10px}
  #speak{padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold}
</style>
</head>
<body>
<input id="text" placeholder="Type something...">
<button id="speak">Speak</button>
<script>
  document.getElementById("speak").onclick = function(){
    var text = document.getElementById("text").value;
    var u = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(u);
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "To-Do List",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  #todoInput{padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;width:70%;font-size:16px;color:#4a3206;margin-bottom:10px}
  #addTodo{padding:10px 18px;border:none;border-radius:10px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold}
  #todoList{list-style:none;padding:0;margin-top:15px;width:100%}
  #todoList li{padding:8px 12px;margin:4px 0;background:rgba(255,140,0,.1);border-radius:8px;cursor:pointer;color:#4a3206}
</style>
</head>
<body>
<input id="todoInput" placeholder="Add a task...">
<button id="addTodo">Add</button>
<ul id="todoList"></ul>
<script>
  var input = document.getElementById("todoInput");
  var list = document.getElementById("todoList");
  document.getElementById("addTodo").onclick = function(){
    if(input.value.trim() === "") return;
    var li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = function(){ li.remove(); };
    list.appendChild(li);
    input.value = "";
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Dice Roller",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
  }
  #dice{font-size:3rem;margin-bottom:15px}
  #roll{padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold}
</style>
</head>
<body>
<div id="dice">🎲</div>
<button id="roll">Roll Dice</button>
<script>
  var faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  document.getElementById("roll").onclick = function(){
    var roll = Math.floor(Math.random() * 6);
    document.getElementById("dice").textContent = faces[roll];
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Progress Bar",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  .track{width:100%;height:30px;background:rgba(255,140,0,.15);border-radius:15px;margin-bottom:15px;overflow:hidden}
  #bar{width:0;height:100%;background:linear-gradient(90deg,#ff8c00,#ffd54a);border-radius:15px;transition:width .3s}
  #fill{padding:12px 22px;border:none;border-radius:12px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold}
</style>
</head>
<body>
<div class="track"><div id="bar"></div></div>
<button id="fill">Fill Progress</button>
<script>
  var progress = 0;
  document.getElementById("fill").onclick = function(){
    progress = Math.min(progress + 20, 100);
    document.getElementById("bar").style.width = progress + "%";
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Image Gallery",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  #gallery{width:180px;border-radius:12px;margin-bottom:10px}
  button{padding:8px 16px;border:none;border-radius:10px;cursor:pointer;font-weight:bold;margin:4px}
  #prev{background:#ffd54a;color:#4a2000}
  #next{background:#ff8c00;color:white}
</style>
</head>
<body>
<img id="gallery" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&w=200">
<div>
<button id="prev">Previous</button>
<button id="next">Next</button>
</div>
<script>
  var images = [
    "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&w=200",
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&w=200",
    "https://images.pexels.com/photos/45170/pexels-photo-45170.jpeg?auto=compress&w=200"
  ];
  var current = 0;
  document.getElementById("next").onclick = function(){
    current = (current + 1) % images.length;
    document.getElementById("gallery").src = images[current];
  };
  document.getElementById("prev").onclick = function(){
    current = (current - 1 + images.length) % images.length;
    document.getElementById("gallery").src = images[current];
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Tip Calculator",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
    text-align:center;
  }
  #bill{padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;width:70%;font-size:16px;color:#4a3206;margin-bottom:10px}
  #tip{padding:10px;border:1px solid rgba(255,140,0,.3);border-radius:10px;font-size:14px;color:#4a3206;margin-bottom:10px}
  #calc{padding:10px 18px;border:none;border-radius:10px;background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000;cursor:pointer;font-weight:bold}
  #result{margin-top:15px;color:#ff8c00;font-weight:bold;font-size:1.2rem}
</style>
</head>
<body>
<input id="bill" placeholder="Bill amount" type="number">
<select id="tip">
<option value="0.10">10%</option>
<option value="0.15" selected>15%</option>
<option value="0.20">20%</option>
</select>
<button id="calc">Calculate</button>
<p id="result"></p>
<script>
  document.getElementById("calc").onclick = function(){
    var bill = parseFloat(document.getElementById("bill").value) || 0;
    var tip = parseFloat(document.getElementById("tip").value);
    var total = bill + bill * tip;
    document.getElementById("result").textContent = "Total: $" + total.toFixed(2);
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Stopwatch",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  #display{font-size:2.5rem;font-weight:bold;color:#ff8c00;font-family:Courier New,monospace;margin-bottom:15px}
  button{padding:10px 18px;border:none;border-radius:10px;cursor:pointer;font-weight:bold;margin:3px}
  #start{background:linear-gradient(135deg,#ff8c00,#ffd54a);color:#4a2000}
  #stop{background:#ffd54a;color:#4a2000}
  #reset{background:rgba(255,140,0,.2);color:#4a2000}
</style>
</head>
<body>
<div id="display">00:00</div>
<button id="start">Start</button>
<button id="stop">Stop</button>
<button id="reset">Reset</button>
<script>
  var seconds = 0, timer = null;
  var display = document.getElementById("display");
  function format(s){
    var m = Math.floor(s/60).toString().padStart(2,"0");
    var sec = (s%60).toString().padStart(2,"0");
    return m + ":" + sec;
  }
  document.getElementById("start").onclick = function(){
    if(timer) return;
    timer = setInterval(function(){
      seconds++;
      display.textContent = format(seconds);
    }, 1000);
  };
  document.getElementById("stop").onclick = function(){
    clearInterval(timer);
    timer = null;
  };
  document.getElementById("reset").onclick = function(){
    clearInterval(timer);
    timer = null;
    seconds = 0;
    display.textContent = "00:00";
  };
</script>
</body>
</html>`,
    preview: true
  },
  {
    title: "Accordion",
    type: "html",
    code: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:90px;
    background:#fff;
    font-family:Arial,sans-serif;
    padding:15px;
  }
  .acc-header{cursor:pointer;color:#ff8c00;padding:10px;background:rgba(255,140,0,.1);border-radius:10px;margin:0;font-size:1rem}
  .acc-body{display:none;padding:10px;color:#7a5c1a}
</style>
</head>
<body>
<div>
<h3 class="acc-header">Click to expand</h3>
<p class="acc-body">Hidden content! This accordion expands and collapses when you click the header.</p>
</div>
<script>
  document.querySelector(".acc-header").onclick = function(){
    var body = document.querySelector(".acc-body");
    body.style.display = body.style.display === "block" ? "none" : "block";
  };
</script>
</body>
</html>`,
    preview: true
  }
];
