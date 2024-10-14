/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Return a string “Congratulations” if a person is equal to or older than 21
*/
let personAge: number = 21;
function checkAge(age: number): string {
  if (age >= 21) {
    return 'Congratulations';
  }
  return 'Sorry, you are not old enough';
}
console.log(checkAge(personAge));
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------
