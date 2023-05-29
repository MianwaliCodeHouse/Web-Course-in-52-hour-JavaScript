//? DOM Methods
//* 1) Attributes Handling Methods
// element.classList.add("ClassName");


function add_class(){
  let heading=document.querySelector("h1")
  heading.classList.add("h1_heading")
}

// element.classList.remove("ClassName");
function remove_class(){
  let heading=document.querySelector("h1")
  heading.classList.remove("h1_heading")
}
// element.classList.toggle("mystyle");
function toggle_class(){
  let heading=document.querySelector("h1")
  heading.classList.toggle("h1_heading")
}
// element.setAttribute(attribute, value);
function add_id(){
  let heading=document.querySelector("h1")
  heading.setAttribute("id","idOfHeading")
}

//* 2) Events Handling Methods
// element.addEventListener("click", function(){ code });
let elementbtn=document.querySelector(".eventdemobtn")
elementbtn.addEventListener("click",()=>{
  console.log("Msg: You click the Btn")
})

// element.onclick = function(){code};
let btn=document.querySelector(".GoodWayOfEventHandling")
btn.onclick=()=>{
  alert("Msg: You click the Btn")
}

// element.click()
let link=document.querySelector("a")
// link.click()

//* 3) Audio & Video Methods
let audio=document.querySelector("audio")
function play_audio(){
  audio.play()
}
function pause_audio(){
  audio.pause()
}
// element.play()
// element.pause()
