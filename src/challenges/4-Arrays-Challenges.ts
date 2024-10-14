/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an array of numbers
*/
let myNumberArray: number[] = [1, 2, 3, 4, 5];
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
From the previously create array, access the second-indexed item
*/
console.log(myNumberArray[1]);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an array of the two boolean values
*/
let myBooleanArray: boolean[] = [true, false, false, true];
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 4 ------------------
Create an array of a number and a string without type annotation
*/
let myMixedArray = [1, 'Hello'];
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 5 ------------------
Annotate an array with types number, boolean and string
*/
let mySecondMixedArray: (number | boolean | string)[] = [1, true, 'Hello'];
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 6 ------------------
Simulate a Type Error with a number type array by assigning it a string value array
*/
//myNumberArray = ['Hello', 'World'];
