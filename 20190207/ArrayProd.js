const ArrayProd = (arr) => {
  return arr.map(x => arr.reduce((total, y) => total * y) / x);
}

const ArrayProdWoDivision = (arr) => {
  return arr.map((x, i) => arr.reduce((total, y, j) => total * (i != j ? y : 1)));
}

let arr = [1, 2, 3, 4, 5];

console.log(ArrayProd(arr));
console.log(ArrayProdWoDivision(arr));

/* Output is: 
 * [120, 60, 40, 30, 24]
 */

