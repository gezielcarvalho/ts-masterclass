function holidaySales(
  product: string,
  sales: number,
  tax: number,
  discount: number,
): [string, number] {
  let price: number = 0;

  if (product === 'jacket') {
    price = 100;
  } else if (product === 'shoes') {
    price = 50;
  } else if (product === 'hat') {
    price = 25;
  } else {
    price = 0;
    product += '_not_available';
  }

  let total: number = sales * price;
  total = total + total * tax;
  total = total - total * discount;

  return [product, total];
}

let product = 'jacket';
let sales = 5;
let tax = 0.1;
let discount = 0.2;
let result = holidaySales(product, sales, tax, discount);
console.log(`Product: ${result[0]}, Total: $${result[1]}`);

product = 'shoes';
sales = 7;
tax = 0.1;
discount = 0.2;
result = holidaySales(product, sales, tax, discount);
console.log(`Product: ${result[0]}, Total: $${result[1]}`);

product = 'hat';
sales = 10;
tax = 0.1;
discount = 0.2;
result = holidaySales(product, sales, tax, discount);
console.log(`Product: ${result[0]}, Total: $${result[1]}`);

product = 'socks';
sales = 10;
tax = 0.1;
discount = 0.2;
result = holidaySales(product, sales, tax, discount);
console.log(`Product: ${result[0]}, Total: $${result[1]}`);
