// object to iterate
let objIn: { [key: string]: number | string } = { a: 1, b: 2, c: '3' };
// for in loop
for (let key in objIn) {
  console.log(key);
  console.log(objIn[key]);
}

// array to iterate
let arrIn: number[] = [1, 2, 3, 4, 5];
// for in loop
for (let key in arrIn) {
  console.log(key);
  console.log(arrIn[key]);
}

// tuple to iterate
let tupleIn: [string, number] = ['React', 30];
// for in loop
for (let key in tupleIn) {
  console.log(key);
  console.log(tupleIn[key]);
}
