/* THE SYNTAX
for (VARIABLE of OBJECT) {
  STATEMENTS
}
*/

// ARRAY ITERATION
var animals = ["cow", "chicken", "cat", "dog"];
var str = "";
for (let value of animals) {
  str += value + " | ";
  console.log(str);
}

// STRING ITERATION
var hello = "world!";
str = "";
for (let value of hello) {
  str += value + " | ";
  console.log(str);
}

// OBJECT ITERATION
var person = {
  name : "Popescu",
  email : "polescu@test.com",
  age : 123
};
var str = "";
for (let [key, value] of Object.entries(person)) {
  str += key + ": "+ value;
  console.log(str);
}