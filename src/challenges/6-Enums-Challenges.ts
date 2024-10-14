/* *-*-*-*-*-*-*-*-*-*-* Challenge 1 ------------------
Create an enum of product names and display it on the console
*/
enum ProductNames {
  Laptop = 'Laptop',
  Mouse = 'Mouse',
  Keyboard = 'Keyboard',
}
console.log(ProductNames.Laptop);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Create an enum of product ids and display it on the console
*/
enum ProductIds {
  Laptop = 1,
  Mouse,
  Keyboard,
}
console.log(ProductIds.Laptop);
// ----------------------------------------------------
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
// ----------------------------------------------------

/* *-*-*-*-*-*-*-*-*-*-* Challenge 3 ------------------
Create an enum of a single favorite product detail from the two previously created enums and display it on the console
*/
enum FavoriteProduct {
  ProductName = ProductNames.Laptop,
  ProductId = ProductIds.Laptop,
}
console.log(FavoriteProduct.ProductName);
console.log(FavoriteProduct.ProductId);
