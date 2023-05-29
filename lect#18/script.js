
//? Create , Insert & Delete HTML elements 

//* 1) Create 
// store_element_var=document.createElement("tagName");

//* 2) Insert 
// selected_html_element.appendChild(store_element_var);

//* 3) Delete
// store_element_var.remove();


let s=document.querySelector("#select-second")
for (let index = 0; index < 60; index++) {
  s.innerHTML+=`<option value="${index}">${index}</option>`
  
}