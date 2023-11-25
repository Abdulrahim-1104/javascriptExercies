// JSON - Javascript Object Notation
// when we fetch data from api and all we get the data in this format
/* The Json is same as object but the string must given in douuble
quates even if that is a key*/
let json1 = {
 "name":"rahim",
 "age":20
}
console.log(json1)
let api_json_data = `
[{"a":1},{"b":2},{"d":3}]`
console.log(api_json_data)

/* when we get data from api we got in string and converting this 
string to json file*/

let string_toJson = JSON.parse(api_json_data)
console.log(string_toJson)
console.log(typeof(string_toJson))
/* While updating the data to api or other we need to change that
data to string here how to conver */

let json_toSting = JSON.stringify(string_toJson)
console.log(json_toSting)
console.log(typeof(json_toSting))