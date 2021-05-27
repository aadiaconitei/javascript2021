/* THE SYNTAX
while (CONDITION) {
  STATEMENTS
}
*/

var animals = ["cow", "chicken", "cat", "dog"];
var i = 0;
var str = "";

while (i<4) {
  str += animals[i] + " | ";
  console.log(str);
  i++;
}