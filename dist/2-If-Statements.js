"use strict";
let num1 = 10;
let num2 = 5;
let num3 = 15;
let numString = '11';
if (num1 == Number(numString)) {
    console.log(`${num1} is equal to ${numString}`);
}
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
}
if (num1 < num2) {
    console.log(`${num1} is less than ${num2}`);
}
else {
    console.log(`${num1} is not less than ${num2}`);
}
if (num1 > num2 && num1 < num3) {
    console.log(`${num1} is greater than ${num2} and less than ${num3}`);
}
else if (num1 > num2 || num1 > num3) {
    console.log(`${num1} is greater than ${num2} or ${num3}`);
}
else if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater than ${num2} and ${num3}`);
}
else if (num1 < num2 || num1 < num3) {
    console.log(`${num1} is less than ${num2} or ${num3}`);
}
else {
    console.log(`${num1} is not greater than ${num2} and ${num3}`);
}
let num4 = 20;
let num5 = 25;
let num6 = 30;
let num7 = 35;
switch (true) {
    case num4 > num5:
        console.log(`${num4} is greater than ${num5}`);
        break;
    case num4 < num5:
        console.log(`${num4} is less than ${num5}`);
        break;
    default:
        console.log(`${num4} is not less than ${num5}`);
}
let num8 = 40;
let num9 = 45;
num8 > num9
    ? console.log(`${num8} is greater than ${num9}`)
    : console.log(`${num8} is not greater than ${num9}`);
