
//? API 
// API stands for Application Programming Interface used to connect one app to talk with another app in which one is requesting data to other and other send data after validation.

//? Web API
// A Web API is an application programming interface for the Web. 
//! Main Types 
// 1)Browser API (client-side,built-in)
// 2)Server API (Third-party , not built-in , Free or Paid , Weather APIs or flight booking APIs)

//? Browser APIs
// All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.these built-in APIs are called Browser APIs.
//! Types of Browser APIs 
// 1) Storage API
// 2) Fetch API
// 3) Others


//? LocalStorage API
// LocalStorage API is a Web Storage API that provide simple way & syntax for storing and retrieving data in the browser. It stores data parmanently(reload , close tab , close browser):

// Store Data 
// localStorage.setItem( key , value )
// localStorage.setItem( "firstName" , "MiawaliCodehouse" )
// localStorage.setItem( "SecondName" , "M.Yasir" )
// localStorage.setItem( "SecondNam" , "M.Yasir" )
// localStorage.setItem( "SecondNa" , "M.Yasir" )
// localStorage.setItem( "SecondN" , "M.Yasir" )
// localStorage.setItem( "Second" , "M.Yasir" )
// localStorage.setItem( "Secon" , "M.Yasir" )
// Get Data 
// localStorage.getItem(key)
// console.log(localStorage.getItem("firstName"))
// Get key 
// localStorage.key(index)
// console.log(localStorage.key(1))
// Remove Data of a specific key 
// localStorage.removeItem(key)
// localStorage.removeItem("SecondName")
// Clear All LocalStorage 
// localStorage.clear()
// localStorage.clear()


//? SessionStorage API
// It is same as localstorage but the difference is that the sessionStorage object stores data for one session.The data is deleted when the browser is closed.


// sessionStorage.getItem()
// sessionStorage.setItem()
// sessionStorage.removeItem()
// sessionStorage.clear()





