// function 
// default arguments
function defarg(name='noname'){
 console.log('hello '+name)
}
defarg()

// function expression - > just like the higher order function
let fun = function(){console.log('lets have fun')}
fun()

// arrow function -> like lambda function
let lambda = () => {console.log('This is lambda function')}
lambda()

// if only have one parameter and the one return means
let arr = [1,2,3,4,5]
let lam = arr => arr.length
console.log(lam(arr))

// variable length arguments
let varlen = function(...args){ return args.length}
console.log(varlen(1,2,3,4,5,6))

// arguments keyword
let ar = function(){console.log(arguments[1].length)}
ar([1,2,3,4,5],[1,2,3,4])

// generators
function* gen(){
 let i = 0
 while(true){
  yield i++
 }
}
let genobj = gen()
console.log(genobj.next().value)
console.log(genobj.next().value)
console.log(genobj.next().value)
console.log(genobj.next().value)
console.log(genobj.next().value)

for(let x=0;x<=5;x++){
console.log(genobj.next().value)
}

// callback fucntion -> which is passing a function in arguments

function f1(fun){
 fun()
}
function f2(){
 console.log('Hellow mother father')
}
f1(f2)   // -> fucntion passing in arugument