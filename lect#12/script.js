
//! Window Object Events V/S Window Object Methods

//? Window Object Methods
// window.functionName(give data if need) 
// example:
//! window.open()


//? Window Object Events (onclick , oninput , onresize)
// window.eventName=()=>{
//   Code
// }
// htmlElement.eventName=()=>{
//   Code
// }


//! Most Important Events in Javascript
// 1)window.onload=()=>{ code }    //! mostly used for building loading pages

// window.onload=()=>{
//   loadingAnimation.style.display="none"
// }


// 2)window.onscroll=()=>{ code }  //! mostly used for buidling horizontal scrollbar
// window.onscroll=(e)=>{
//   console.log(e)
//   console.log("run code")
// }



// 3)window.onmousemove=()=>{ code } //! mostly used to show animation with mouse

// window.onmousemove=(e)=>{
//   console.log("x:",e.screenX)
//   console.log("y:",e.screenY)
// }


// 4)window.onkeypress=()=>{ code }  //!mostly used for knowing which keys user press in our app

// window.onkeypress=(e)=>{
//   if(e.key==="Enter"){
//     console.log("user press 'Enter' key on his keyboard")
//   }
// }

