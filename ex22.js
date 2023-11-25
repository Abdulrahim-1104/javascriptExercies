// asyn function always return promise 
// await must use inside the asyn function
// the await wait until the promise fullfilled
console.log('Async function and Await keyword')
async function afun(){
 return 'Hello'
}
console.log(afun())

let p1 = new Promise((resolve,reject)=>{
 let bool = true
 if(bool){
  setTimeout(resolve,2000,"its true")
 }
 else{
  reject("its false")
 }
})
async function asyncfun(){
try{
 res = await p1
 console.log(res)
}
catch(error){
 console.log(error)
}
}
asyncfun()