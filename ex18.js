// for get and set method
class Employee{
 constructor(id,salary){
  this._id = id 
  this._salary = salary
 }
 get salary(){
  return this._salary
 }
 set salary(salary){
  if (salary < 5000){
   salary = 5000     // this is the main advantages for get and set method
  }                  // wont allow to enter worng values 
  this._salary = salary
 }
}
function outsideclass(){
 console.log('Out side calss fucntion')
}
let e1 = new Employee('1',10000)
console.log(e1.salary)
e1.salary = 6000
console.log(e1.salary)
e1.salary = 4000
console.log(e1.salary)
