// static and non statcic and inheritance 
class User{
 static usercount = 0
 constructor(name,age){
  this.name = name
  this.age = age
  User.usercount++
 }
 static diplay_usercount(){
  console.log(`Total user in our page is ${User.usercount}`)
 }
 login(){
  console.log(`You have successfully login ${this.name}`)
 }
 logout(){
  console.log(`You have successfully logout ${this.name}`)
 }
}

let u1 = new User('Rahim',19)
let u2 = new User('Gokul',20)
let u3 = new User('Santhosh',19)
u1.login()
u2.logout()
console.log(u3.name)
User.diplay_usercount()

class PaidUser extends User{
 constructor(name,age){
  super(name,age)
  this.storage = 100
  this.greet()
 }
 greet(){
  console.log('Welcome Paid user '+ this.name)
  console.log('You got extra 100 free Storage')
  return this
 }
 login(){
  console.log('You logged in and you are a paid user right')
  return this
 }
}
let pu1 = new PaidUser('Rahim',20)
User.diplay_usercount()
pu1.login()
pu1.greet()
console.log('After using method chaning')
// instead of that use method chaining
pu1.login().greet()