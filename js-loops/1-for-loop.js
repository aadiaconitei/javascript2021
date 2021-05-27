/* FOR LOOP SYNTAX
for (INIT; CONDITION; INCREMENT) {
  STATEMENTS
}
*/

// Example A - A simple loop
for (let i=0; i<10; i++) {
  console.log(i); // Counts 0 to 9
}

// Example B - No INIT and INCREMENT
var i = 0;
for (; i<10; ) {
  console.log(i); // Counts 0 to 9
  i++;
}