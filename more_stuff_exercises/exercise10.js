/* 
WRONG ORIGINAL ANSWER:
This will return 6 because implicit coercion of a number after a string only
occurs for string concatenation (like "5" + 1 = 51).
Other arithematic operators (like ++) will 
coerce the string to a number ('5'++ = 6).

RIGHT IDEA BUT IGNORES THAT y++ returns y, not the value after adding 1.


SOLUTION:
This returns 5. 5 does get coerced into a number, but y++ returns y, not y + 1.
*/