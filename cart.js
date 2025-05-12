const cart = [
  { name: "Laptop", price: 1000 }, 
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Changed <= to < and now the loop returns the correct total.
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate === 0 || discountRate === 1){
    return console.log(`Please, check for valid discount rate!`);
  }else{
  return total - (total * discountRate); // Bug: Missing validation for discountRate. Fix:  Used logical operators to validate discountRate and handle edge cases.
  }
}

function generateReceipt(cartItems, total) {
    if (total === NaN){
    return console.log(`Please, enter numeric prices in order to calculate accurate total.`);
  }else{
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number. Fix:  I added an if else statement to check for NaN.
  return receipt;
  }
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount (I did several runs through this code with various discount rates to be sure things were working properly).
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

/*The dev tools helped me to pinpoint errors and messy syntax as I debugged my code above.  I could log statements to the console to make sure my if...else statements were
working properly, and it was great to be able to see the webpage running in real-time as I was making changes to my code!  The dev tools are certainly helpful in debugging
code quicker and more efficiently.  They are very fine-tuned, and honed into what the code you are writing is supposed to do.
*/