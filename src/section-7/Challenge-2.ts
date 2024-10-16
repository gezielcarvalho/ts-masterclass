/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Simulate a type error for the returned value of a function of arbitrary type
*/
function arbitraryMultiply(a: any, b: any): any {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Please provide numbers only');
  }
  return a * b;
}
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ---------------------------------------------------
let arbitraryResult: number;
try {
  arbitraryResult = arbitraryMultiply('2', 3);
  console.log(arbitraryResult);
} catch (error: any) {
  console.log(error.message);
}
