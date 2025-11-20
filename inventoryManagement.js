// Write your code here
const products = [
  "Laptop",
  "phone",
  "headphones",
  "Monitor",
];
function logFirstProduct() {
  console.log(products[0]);
  console.log(products);
}


function addProduct(Laptop) {
  products.push(Laptop);
}
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  } else {
    console.log("Invalid product index");
  }
}
function removeLastProduct() {
  products.pop();
}











// Export the necessary parts for testingfunction removeLastProduct() {
  

module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
