/* THE SYNTAX
do {
  STATEMENTS
} while (CONDITION)
*/

var animals = ["cow", "chicken", "cat", "dog"];
var i = 0;
var str = "";

do {
  str += animals[i] + " | ";
  i++;
} while (i<4);