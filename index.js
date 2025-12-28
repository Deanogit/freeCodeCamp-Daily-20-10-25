// Tip Calculator
// Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

// Prices will be given in the format: "$N.NN".
// Custom tip percents will be given in this format: "25%".
// Return amounts in the same "$N.NN" format, rounded to two decimal places.
// For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].

function calculateTips(mealPrice, customTip) {
  console.log(mealPrice, customTip);

  // sanitise price and custom
  // const priceRegex = /([0-9\.]+)/g
  // const arr = mealPrice.matchAll(priceRegex)
  const price = parseFloat(mealPrice.slice(1));
  console.log(price);

  const custom = parseFloat(customTip) / 100;
  console.log(custom);

  // return
  const returnArr = [];
  returnArr.push(
    `$${(price * 0.15).toFixed(2)}`,
    `$${(price * 0.2).toFixed(2)}`,
    `$${(price * custom).toFixed(2)}`
  );
  console.log(returnArr);
  return returnArr;
  // return mealPrice;
}
