class Car{
 constructor(name){
  this.name = name
 }
 whatcar(){
  console.log(this.name+' Car')
 }
}
function drive(){
 console.log('Driving a car')
}
function stop(){
 console.log('Stopped a car')
}
export default Car;
export {drive,stop};