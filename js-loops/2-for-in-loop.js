/* THE SYNTAX
for (VARIABLE in OBJECT) {
  STATEMENTS
}
*/

// OBJECT ITERATION
var person = {
  name : "Popescu",
  email : "polescu@test.com",
  age : 123
};
var str = "";
for (let key in person) {
  str += key + " | ";
  console.log(str);
}

// ARRAY ITERATION
var animals = ["cow", "chicken", "cat", "dog"];
var str = "";
for (let key in animals) {
  str += key + " | ";
  console.log(str);
}

// STRING ITERATION
var hello = "world!";
str = "";
for (let key in hello) {
  str += key + " | ";
  console.log(str);
}