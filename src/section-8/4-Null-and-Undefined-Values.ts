let discountEx4: number;

function specialDiscount(holidaySeason: boolean): number {
  if (holidaySeason) {
    discountEx4 = 0.2;
  } else {
    discountEx4 = 0.1;
  }
  return discountEx4;
}

let holidayDiscount = specialDiscount(true);
console.log(holidayDiscount);

let regularDiscount = specialDiscount(false);
console.log(regularDiscount);

// change tsconfig.json to "strictNullChecks": false to run the following code
// let regularDiscountWithNull = specialDiscount(null);
// let regularDiscountWithUndefined = specialDiscount(undefined);
// console.log(regularDiscount);
