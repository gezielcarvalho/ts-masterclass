/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an arrow function that returns the addition of a number and a boolean type
*/
let addNumberAndBoolean = (
  numberValue: number,
  booleanValue: boolean,
): number => numberValue + Number(booleanValue);

let NumBoolResult: number = addNumberAndBoolean(5, true);
console.log({ NumBoolResult });
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
