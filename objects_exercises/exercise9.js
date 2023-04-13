/*
The code prints out 'hi when logging foo.a and 'hello' when logging qux. This
is because the foo object's values can be changed but you cannot reassign a 
string. (The function is basically being passed 'hello' as an argument and then
told that 'hello' now equals 'hi'. Strings can't be mutated like this.)
s
*/