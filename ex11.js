// loops 
// for loops

for(let i = 0; i<=10 ; i++){
 console.log(i)
}

// while loop
let i = 0
while(i<=10){
 console.log(i)
 i++;
}
// do whwile
i = 0
do{
 console.log(i)
 i++;
}while(i<=10);

// for of -> for arrays ,strings
let arr = [1,2,3,4,5]
for(let a of arr){
 console.log(a)
}
let s = 'String'
for(let a of s){
 console.log(a)
}

// for Object -> like dic
let dic ={name:'rahim',age:20,gender:'male'}
for(let key in dic){
 console.log(key,dic[key])
}