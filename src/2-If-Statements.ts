let num1: number = 10;
let num2: number = 5;
let num3: number = 15;
let numString: string = '11';

if (num1 == Number(numString)) {
  console.log(`${num1} is equal to ${numString}`);
}

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
}

if (num1 < num2) {
  console.log(`${num1} is less than ${num2}`);
} else {
  console.log(`${num1} is not less than ${num2}`);
}

if (num1 > num2 && num1 < num3) {
  console.log(`${num1} is greater than ${num2} and less than ${num3}`);
} else if (num1 > num2 || num1 > num3) {
  console.log(`${num1} is greater than ${num2} or ${num3}`);
} else if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater than ${num2} and ${num3}`);
} else if (num1 < num2 || num1 < num3) {
  console.log(`${num1} is less than ${num2} or ${num3}`);
} else {
  console.log(`${num1} is not greater than ${num2} and ${num3}`);
}

// refactor the above code using switch statement
let num4: number = 20;
let num5: number = 25;
let num6: number = 30;
let num7: number = 35;

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

// ternary operator
let num8: number = 40;
let num9: number = 45;

num8 > num9
  ? console.log(`${num8} is greater than ${num9}`)
  : console.log(`${num8} is not greater than ${num9}`);
