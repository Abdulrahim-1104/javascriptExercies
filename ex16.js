// set in js
// it will check the stricly primitive data types but no the reference type
let s1 = new Set([1,2,3,1,2,3,1,2,[1,2]]);
a = 1
let arr = [1,2]
let crr = [1,2]
let brr = arr
s1.add(arr)
s1.add(brr)
s1.add(a)
s1.add(crr)
console.log(s1);
console.log(arr===s1[0])
// Map -> its exactly like dic 
/* Objects and map are almost similar the main differenct is 
the objects key automatically converted into string but map 
have diff datatype key */

let map1 = new Map()
map1.set(1,2)
map1.set(2,2)
map1.set(3,2)
console.log(map1)
// iterate over the for of loop
for(let [k,v] of map1){
 console.log(k,v)
}
for(let m of map1){
 console.log(m)
}