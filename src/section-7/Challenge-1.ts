/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create a function that returns the multiplication of two arbitrary numbers and returns a type error when passed a string
*/
function multiply(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Please provide numbers only');
  }
  return a * b;
}
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
