var animals = ["cow", "chicken", "cat", "dog"];
var i = 0;
var str = "";

while (true) {
  str += animals[i] + " | ";
  console.log(str);
  i++;

  // THIS WILL STOP THE LOOP
  if (i==4) { break; } 
}