// Promise -> it is a object it either success or failure or pending status
// This created for code readabitlty it can also achieve by function inside function
let takkalBooking = new Promise((resolve,reject)=>{
 let booking = true
 if(booking)                         
   resolve()              //this are all only a promise definition
 else
   reject()
})

// actual promise caall
takkalBooking.then(resolve).catch(reject)
function resolve(){
 console.log('Booking conformed thanks you make your promise success')
}
function reject(){
 console.log('Booking not conformed make your promise failure')
}
// there is a lot of build in function for promise
// promise.all(), promise.allsettled(), promise.any() etc.......