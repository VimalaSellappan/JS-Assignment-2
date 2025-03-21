let input = prompt("Enter the price (e.g., $49.99):");
let price=input.slice(1);
let new_price = parseFloat(price);
let discounted_price = new_price- (new_price * 0.10);
console.log('Your discounted price is: $' + discounted_price);