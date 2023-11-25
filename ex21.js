console.log('Error Handling')
let numerator = Number(prompt('Enter numerator'))
let denominator = Number(prompt('Enter Denominator'))
try{
 if(denominator==0){
  throw "cant divide by zero"
 }
 else{
  console.log(numerator/denominator)
 }
}
catch(error){
 console.log(error)
}