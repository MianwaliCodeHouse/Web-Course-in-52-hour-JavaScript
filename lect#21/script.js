
//? What is AJAX?
// AJAX Stand for Asynchronous JavaScript And XML. A way in which we read data from a web server without reloading the page in the background.example: (Weather APP)


//? Fetch API 
// The fetch(url) method starts the process of fetching a resource from a server.
//! Note: Fetch API is not AJAX but work like AJAX and it is simpler than AJAX.
 
// Fetch API contains Three Steps:
// 1)fetch 
// 2)check requested response
// 3)Get Data

//* Syntax 
// fetch("url-string").then(
//   (response)=>{
//     if(response.ok){
//       return response.json();  //here we will convert response into Text or Jsong
//     }
//   }
// ).then(
//   (Data)=>{
//     document.body.innerHTML=Data
//   }
// )

//* Types of Request 
// 1)Internal Request(Into PC)

// function fetchInternal(){
// fetch("demo/test.html").then(
//   r=>{
//     if(r.ok){
//       return r.text()
//     }else{
//       alert("Something is Wrong!!!")
//     }
//   }
// ).then(
//   d=>{
//     console.log(d)
//   }
// )

// }


// 2)External Request(Fetch Data from another Server)

function fetchExternal(){

  let url=link_url.value;
  fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(
    r=>{
      if(r.ok){
        return r.json()
      }else{
        alert("Something is Wrong!!!")
      }
    }
  ).then(
    d=>{
      short_link.innerHTML=d.result.short_link;
      console.log(d.result.short_link)
    }
  )
  
  }

