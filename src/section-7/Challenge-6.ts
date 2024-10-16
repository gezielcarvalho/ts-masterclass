/* *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
Create a function that takes an array of numbers, then returns it. Does not change the array. If a string is passed, it throws a type error
*/
function returnArray(arr: any[]): number[] {
  if (
    arr.some(function (element) {
      return typeof element === 'string';
    })
  ) {
    throw new TypeError('Please provide numbers only');
  }
  return arr;
}

let arr: number[] = [1, 2, 3];
let arrResult: number[] = returnArray(arr);
console.log({ arrResult });

let arr2: any[] = [1, 2, '3'];
try {
  let arrResult2: number[] = returnArray(arr2);
  console.log({ arrResult2 });
} catch (error: any) {
  console.log(error.message);
}
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
