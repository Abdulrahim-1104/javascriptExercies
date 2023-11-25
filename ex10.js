// Objects - which is like dic in python

let dic = {
 name:'rahim',
 age:20,
 gender:'male'
}
console.log(dic)
console.log(dic.name,dic.age,dic['age'])
dic.age = 21
console.log(dic)
dic['age'] = 20
console.log(dic)

dic.name = {firstname:'abdul',lastname:'rahim'}
console.log(dic)

dic.age = getage()
function getage(){
 return age = 22
}
console.log(dic)

console.log(dic.name['firstname'])
console.log(dic['name']['firstname'])

dic.fav = function fav(){
 return 'black'
}
console.log(dic.fav())