let coursePrice: number = 19.99;
//coursePrice = "19.99"; // Error: Type 'string' is not assignable to type 'number'.

let courseName = 'Typescript Masterclass';

let isPublished: boolean = true;
//isPublished = 1; // Error: Type 'number' is not assignable to type 'boolean'.

console.log(coursePrice, courseName, isPublished);

let numbers = [1, 2, 3, 4, 5, '6'];

console.log(numbers);

// array of strings
let strings: string[] = ['hello', 'world', 'typescript'];
console.log(strings);

// array of mixed data
let mixed: (string | number | boolean)[] = ['hello', 1, true];
console.log(mixed);

// nested number type array.
let nested: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(nested);

// nested array of mixed data
let nestedMixed: (string | number | boolean)[][] = [
  ['hello', 1, true],
  ['world', 2, false],
];

console.log(nestedMixed);

let nestedMixed2: (string | number | boolean)[][];
