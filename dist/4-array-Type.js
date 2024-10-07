"use strict";
let numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
let stringsArray = ['hello', 'world', 'typescript'];
console.log(stringsArray);
let mixedArray = ['hello', 1, true];
console.log(mixedArray);
let nestedNumberArray = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(nestedNumberArray);
let nestedMixedArray = [
    ['hello', true, 1],
    ['world', 2, false],
    [false, false],
];
console.log(nestedMixedArray);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let john = new Person('John', 25);
let secondNestedMixedArray = [
    ['hello', true, 1, john],
    ['world', 2, false],
    [false, false],
];
console.log(secondNestedMixedArray);
