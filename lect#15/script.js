//! ------------- Asynchronous JavaScript v/s Synchronous JavaScript----------
//? Synchronous JavaScript
// Functions running in sequence with other functions are called Synchronous
// Blocking Functions

// for (let index = 0; index < 5; index++) {
//   console.log(index) 
// }
// console.log("Finished")


//? Asynchronous JavaScript
// Functions running in parallel with other functions are called asynchronous.
// Non-Blocking Functions


// count=0
// async_fn=setInterval(() => {
//   console.log(count)
// if(count===5){
//   clearInterval(async_fn)
// }
//   count++
// }, 1000);
// console.log("finished")

// Note:- 1000ms=1s



//? Timing Events
// The window object allows execution of code at specified time interval or repeat iteration at a specified time interval.These time intervals are called timing events.

//! The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds) //! Executes a function, after waiting a specified number of milliseconds.


// Method:1 
// setTimeout(demoSetTimeout,5000)

// function demoSetTimeout(){
//   console.log("Hi i'm setTimeout Function body")
// }

// console.log("Start or End")

// Method:2 
// setTimeout(() => {

//   // code 
//   console.log("like , subscribe and share")

// }, 5000)



// setInterval(function, milliseconds) //! Executes a function continuously after specified number of milliseconds.You can stop it by using clearIntervel()

// Method : 1 
// with simple function 
// setInterval(clockk,1000)
// function clockk(){
//   let Time_clock=new Date()
//   Time_clock=Time_clock.toLocaleTimeString()
//   console.log(Time_clock)
// }

// Method : 2
// with arrow function 
// setInterval(() => {
  
//     let Time_clock=new Date()
//   Time_clock=Time_clock.toLocaleTimeString()
//   console.log(Time_clock)

// }, 1000);


// Method : 3
// with variable 
// let clock=setInterval(() => {
//       let Time_clock=new Date()
//   Time_clock=Time_clock.toLocaleTimeString()
//   console.log(Time_clock)
// }, 1000);

// function stop(){
//   clearInterval(clock)
// }