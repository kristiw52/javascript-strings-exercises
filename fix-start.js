/*

Fix Start

Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long. For example:

  fixStart('babble'): 'ba**le'

*/

// YOUR CODE GOES HERE
function fixStart(a) {
   var c = a.charAt(0);
   return c + a.slice(1).replace(new RegExp(c, 'b'), '*');
}

console.log(fixStart(bubble));
