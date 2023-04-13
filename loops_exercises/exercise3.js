/*

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

This code causes an infinte loop because the code on line 5 (while (counter - 1))
will always return a truthy value. So the loop says while (truthy), meaning that 
it will loop forever unless there is some way to break out of the loop. We can
never get to the break condition (if (counter > 2)) because each time the loop
reassigns counter to 1.

*/