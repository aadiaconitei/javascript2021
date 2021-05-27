/* THE SYNTAX
ARRAY.forEach(FUNCTION) {
  STATEMENTS
}
*/

// CREATE A HANDLING FUNCTION FIRST
function loop (value) {
  console.log(value);
}

// THEN POINT FOREACH TO THE FUNCTION
var animals = ["cow", "chicken", "cat", "dog"];
animal.forEach(loop);


// OBJECT ITERATION
var person = {
  name : "Popescu",
  email : "polescu@test.com",
  age : 123
};
// Metoda 1
person.forEach(function (item, key) {
	console.log(key);
	console.log(item);
});

// Metoda 2
Object.keys(person).forEach(key => {
  console.log(key);
});
Object.values(person).forEach(value => {
  console.log(value);
});