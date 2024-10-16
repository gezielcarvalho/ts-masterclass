function holidaySalesEx(
  product: string,
  sales: number,
  tax: number,
  discount: number,
  departament: string,
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

  // calculate additional discount per department
  if (departament === 'clothing') {
    discount = discount + 0.1;
  } else if (departament === 'shoes') {
    discount = discount + 0.15;
  } else if (departament === 'accessories') {
    discount = discount + 0.05;
  }

  let total: number = sales * price;
  total = total + total * tax;
  total = total - total * discount;

  return [product, total];
}

let productEx = 'jacket';
let salesEx = 5;
let taxEx = 0.1;
let discountEx = 0.2;
let departamentEx = 'clothing';
let resultEx = holidaySalesEx(
  productEx,
  salesEx,
  taxEx,
  discountEx,
  departamentEx,
);
console.log(`Product: ${resultEx[0]}, Total: $${resultEx[1]}`);

productEx = 'shoes';
salesEx = 7;
taxEx = 0.1;
discountEx = 0.2;
departamentEx = 'shoes';
resultEx = holidaySalesEx(productEx, salesEx, taxEx, discountEx, departamentEx);
console.log(`Product: ${resultEx[0]}, Total: $${resultEx[1]}`);

productEx = 'hat';
salesEx = 10;
taxEx = 0.1;
discountEx = 0.2;
departamentEx = 'accessories';
resultEx = holidaySalesEx(productEx, salesEx, taxEx, discountEx, departamentEx);
console.log(`Product: ${resultEx[0]}, Total: $${resultEx[1]}`);

productEx = 'socks';
salesEx = 10;
taxEx = 0.1;
discountEx = 0.2;
departamentEx = 'clothing';
resultEx = holidaySalesEx(productEx, salesEx, taxEx, discountEx, departamentEx);
console.log(`Product: ${resultEx[0]}, Total: $${resultEx[1]}`);
