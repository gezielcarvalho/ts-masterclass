var num1 = 10;
var num2 = 5;
var num3 = 15;
var numString = '11';
if (num1 == Number(numString)) {
    console.log("".concat(num1, " is equal to ").concat(numString));
}
if (num1 > num2) {
    console.log("".concat(num1, " is greater than ").concat(num2));
}
if (num1 < num2) {
    console.log("".concat(num1, " is less than ").concat(num2));
}
else {
    console.log("".concat(num1, " is not less than ").concat(num2));
}
if (num1 > num2 && num1 < num3) {
    console.log("".concat(num1, " is greater than ").concat(num2, " and less than ").concat(num3));
}
else if (num1 > num2 || num1 > num3) {
    console.log("".concat(num1, " is greater than ").concat(num2, " or ").concat(num3));
}
else if (num1 > num2 && num1 > num3) {
    console.log("".concat(num1, " is greater than ").concat(num2, " and ").concat(num3));
}
else if (num1 < num2 || num1 < num3) {
    console.log("".concat(num1, " is less than ").concat(num2, " or ").concat(num3));
}
else {
    console.log("".concat(num1, " is not greater than ").concat(num2, " and ").concat(num3));
}
// refactor the above code using switch statement
var num4 = 20;
var num5 = 25;
var num6 = 30;
var num7 = 35;
switch (true) {
    case num4 > num5:
        console.log("".concat(num4, " is greater than ").concat(num5));
        break;
    case num4 < num5:
        console.log("".concat(num4, " is less than ").concat(num5));
        break;
    default:
        console.log("".concat(num4, " is not less than ").concat(num5));
}
// ternary operator
var num8 = 40;
var num9 = 45;
num8 > num9
    ? console.log("".concat(num8, " is greater than ").concat(num9))
    : console.log("".concat(num8, " is not greater than ").concat(num9));
