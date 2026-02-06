/*function signature/sample */
function newPrice(currentPrice , discount ) {
  // zzYou have to write your code here
  if (typeof currentPrice !== "number"
      || typeof discount !== "number"
      || discount > 100
      || discount < 0) {
    return 'Invalid';
  }

  else {
    let discountPrice = currentPrice * (discount / 100);
    let newPrice = currentPrice - discountPrice;
    return newPrice.toFixed(3);
  }
}

const price = newPrice(2000, 20);
console.log(price);

