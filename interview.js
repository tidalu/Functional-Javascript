// Consider an array of objects representing different products in a shopping cart, like the one shown below:

let cart = [
  { name: 'Apple', category: 'Fruit', quantity: 10, price: 0.5 },
  { name: 'Orange', category: 'Fruit', quantity: 5, price: 0.8 },
  { name: 'Broccoli', category: 'Vegetable', quantity: 2, price: 1.5 },
  { name: 'Carrot', category: 'Vegetable', quantity: 8, price: 0.2 },
  { name: 'Chicken', category: 'Meat', quantity: 1, price: 10 }
];

// Write a JavaScript function that calculates the total cost of all 'Fruit' items in the cart. Please ensure your function adheres to functional programming principles and avoids changing the original 'cart' array.



function totalCost(arrObj) {
  return arrObj.reduce((total, price) => { 
    if( price.category !== 'Fruit') return total;
    return total + (price.price * price.quantity)
  }, 0);
}


console.log( "total cost", totalCost(cart));
console.log(cart);

const arr = [1, 2, 3, 4, 5, 6, 7,8,9, 10];


function sum(arr) {
  if(arr.length === 0) return 0;
  if(arr.length === 1) return arr[0];
  return arr[0] + sum(arr.splice(1));
}

console.log("sum is" ,sum(arr))
const double = (arr) => { return arr.map(x => x * 2)};

console.log(double(arr));

const odd = (arr) => { return arr.filter(x => x % 2 !== 0);
}

console.log(odd(arr));

const even = (arr) => { return arr.filter((x) => x % 2 === 0)
}

console.log(even(arr));

function fullName (name){
  return (surname) => name+surname;
}










