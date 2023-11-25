function age(){
 let age = document.getElementById("input").value
 let result = document.getElementById("result")
 if(age >= 18){
  age = 'You are an adult'
 }
 else if(age < 18 && age > 0){
  age = 'You are a not adult'
 }
 else{
  age = 'Invalid Age'
 }
  result.innerHTML = age
}