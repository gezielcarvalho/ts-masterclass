"use strict";
let objIn = { a: 1, b: 2, c: '3' };
for (let key in objIn) {
    console.log(key);
    console.log(objIn[key]);
}
let arrIn = [1, 2, 3, 4, 5];
for (let key in arrIn) {
    console.log(key);
    console.log(arrIn[key]);
}
let tupleIn = ['React', 30];
for (let key in tupleIn) {
    console.log(key);
    console.log(tupleIn[key]);
}
