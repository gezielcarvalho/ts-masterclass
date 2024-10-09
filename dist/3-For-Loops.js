"use strict";
let numbers2 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers2.length; i++) {
    console.log(i);
}
let mixData = [
    'helloow',
    1,
    true,
    [1, 2, 3],
];
for (let data of mixData) {
    console.log(data);
}
let obj = {
    name: 'John',
    age: 30,
    isPassed: true,
};
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
for (let item of mixData.entries()) {
    console.log(item);
}
for (let item of mixData.entries()) {
    console.log(item[0], item[1]);
}
for (let [index, data] of mixData.entries()) {
    console.log(index, data);
}
