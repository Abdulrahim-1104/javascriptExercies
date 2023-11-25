// for each method - > list comprehension
// this for each return undefined
let arr = [1,2,3,4,5]
let sum = 0
arr.forEach((val) => {
 sum += val
})
console.log(sum);

// map
let nums = [1,2,3,4,5]
let res = nums.map(x => x*x)
console.log(res)

// filter 
res = nums.filter(x => x%2==0)
console.log(res)

// reduce
res = nums.reduce((sum,x) => sum += x)
console.log(res)