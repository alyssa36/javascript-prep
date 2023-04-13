/*
My original answer : '12' < '9' will evaluate as undefined because '12' and '9' 
are strings.

Correct answer: '12' < '9' will evaluate as true because when comparing strings 
Javascript will do a character by character comparison, and the first character 
in '12' is '1' which is less than '9'. 
*/

console.log('12' < '9');