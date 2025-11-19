function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger; // Pause at start

    let totalPrice = quantity * pricePerItem; // Fixes loop issue
    debugger; // Inspect totalPrice before discount

    if (quantity >= 20) {
        totalPrice *= 0.8; // 20% discount
        debugger; // Inspect discount for large orders
    } else if (quantity >= 10) {
        totalPrice *= 0.9; // 10% discount
        debugger; // Inspect discount for medium orders
    }

    return totalPrice;
}
console.log(calculateDiscountedPrice(5, 50));   // 250
console.log(calculateDiscountedPrice(10, 50));  // 450
console.log(calculateDiscountedPrice(25, 50));  // 1000


module.exports = calculateDiscountedPrice;
