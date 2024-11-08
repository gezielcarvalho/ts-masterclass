function printHello(): void {
  console.log('Hello');
}

printHello();

let productCategory: string;

let shoppingCart = (category: string): void => {
  productCategory = category;
};

console.log(shoppingCart('Electronics'));
