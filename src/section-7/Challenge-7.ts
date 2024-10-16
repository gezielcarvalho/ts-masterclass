/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
Create a function that takes an array of tuples consisting of two properties, a name and an age. Return the names in a string array
*/
function getNames(arr: [string, number][]): string[] {
  return arr.map((tuple) => tuple[0]);
}
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
