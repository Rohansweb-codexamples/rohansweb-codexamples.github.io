{
title:"Neon Text",
code:`
.neon{
color:white;
text-shadow:
0 0 5px cyan,
0 0 15px cyan,
0 0 30px cyan;
}
`
},

{
title:"Hover Glow",
code:`
.glow:hover{
box-shadow:
0 0 10px #fff,
0 0 30px #ff00ff;
}
`
},

{
title:"Smooth Scrolling",
code:`
html{
scroll-behavior:smooth;
}
`
},

{
title:"Center Anything",
code:`
.center{
display:flex;
justify-content:center;
align-items:center;
}
`
},

{
title:"Animated Gradient",
code:`
body{
background:linear-gradient(
270deg,
orange,
red,
pink,
purple
);
background-size:400% 400%;
animation:gradient 8s ease infinite;
}

@keyframes gradient{
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}
`
},

{
title:"Floating Animation",
code:`
.float{
animation:float 3s ease-in-out infinite;
}

@keyframes float{
0%,100%{transform:translateY(0)}
50%{transform:translateY(-15px)}
}
`
},

{
title:"Pulse Effect",
code:`
.pulse{
animation:pulse 1.5s infinite;
}

@keyframes pulse{
50%{
transform:scale(1.08);
}
}
`
},

{
title:"Rainbow Border",
code:`
.rainbow{
border:4px solid;
border-image:
linear-gradient(
90deg,
red,
orange,
yellow,
green,
blue,
purple
) 1;
}
`
},

{
title:"Image Zoom",
code:`
.zoom{
overflow:hidden;
}

.zoom img{
transition:.4s;
}

.zoom:hover img{
transform:scale(1.15);
}
`
},

{
title:"Button Press",
code:`
button{
transition:.15s;
}

button:active{
transform:scale(.92);
}
`
},

{
title:"Typing Text",
code:`
.typing{
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
}
`
},

{
title:"Loading Spinner",
code:`
.spinner{
width:40px;
height:40px;
border:5px solid #ddd;
border-top-color:#ff4500;
border-radius:50%;
animation:spin 1s linear infinite;
}

@keyframes spin{
to{transform:rotate(360deg)}
}
`
},

{
title:"Card Hover",
code:`
.card{
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:
0 15px 30px rgba(0,0,0,.25);
}
`
},

{
title:"Glass Button",
code:`
.glass-button{
background:rgba(255,255,255,.15);
border:1px solid rgba(255,255,255,.3);
backdrop-filter:blur(10px);
color:white;
padding:12px 24px;
border-radius:12px;
}
`
},

{
title:"Hide Scrollbar",
code:`
.hide-scrollbar{
overflow:auto;
scrollbar-width:none;
}

.hide-scrollbar::-webkit-scrollbar{
display:none;
}
`
},

{
title:"Gradient Text",
code:`
.gradient-text{
background:linear-gradient(
90deg,
orange,
red,
purple
);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}
`
},

{
title:"Shake Animation",
code:`
.shake:hover{
animation:shake .4s;
}

@keyframes shake{
0%,100%{transform:translateX(0)}
25%{transform:translateX(-6px)}
75%{transform:translateX(6px)}
}
`
},

{
title:"Blur Background",
code:`
.blur{
backdrop-filter:blur(15px);
background:rgba(255,255,255,.12);
}
`
},

{
title:"3D Card",
code:`
.card-3d{
transition:.4s;
transform-style:preserve-3d;
}

.card-3d:hover{
transform:
perspective(700px)
rotateX(8deg)
rotateY(-8deg)
translateY(-5px);
}
`
},

{
title:"Animated Underline",
code:`
.link{
position:relative;
}

.link::after{
content:"";
position:absolute;
left:0;
bottom:-4px;
width:0;
height:3px;
background:currentColor;
transition:.3s;
}

.link:hover::after{
width:100%;
}
`
},
