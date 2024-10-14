let numbers2: number[] = [1, 2, 3, 4, 5];
for (let i: number = 0; i < numbers2.length; i++) {
  console.log(i);
}

// for of loop
let mixData: (string | number | boolean | number[])[] = [
  'helloow',
  1,
  true,
  [1, 2, 3],
];
for (let data of mixData) {
  console.log(data);
}

// for in loop
let obj: { [key: string]: string | number | boolean } = {
  name: 'John',
  age: 30,
  isPassed: true,
};
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// for item of array

for (let item of mixData.entries()) {
  console.log(item);
}

for (let item of mixData.entries()) {
  console.log(item[0], item[1]);
}

// destructuring
for (let [index, data] of mixData.entries()) {
  console.log(index, data);
}
