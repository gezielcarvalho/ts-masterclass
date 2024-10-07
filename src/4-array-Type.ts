let numbersArray: number[] = [1, 2, 3, 4, 5];
console.log(numbersArray);

let stringsArray: string[] = ['hello', 'world', 'typescript'];
console.log(stringsArray);

let mixedArray: (string | number | boolean)[] = ['hello', 1, true];
console.log(mixedArray);

let nestedNumberArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(nestedNumberArray);

let nestedMixedArray: (string | number | boolean)[][] = [
  ['hello', true, 1],
  ['world', 2, false],
  [false, false],
];
console.log(nestedMixedArray);

class Person {
  constructor(public name: string, public age: number) {}
}
let john = new Person('John', 25);

let secondNestedMixedArray: (string | number | boolean | Person)[][] = [
  ['hello', true, 1, john],
  ['world', 2, false],
  [false, false],
];
console.log(secondNestedMixedArray);
