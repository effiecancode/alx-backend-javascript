function calculateNumber(a, b) {
    // if one parameter id provided
    if (typeof b === 'undefined') {
        if (isNaN(a)) {
            throw new TypeError('Parameters must be numbers');
        }
        // convert the parameter to a number and round it off
        a = Math.round(Number(a));
        return a;
    }



  // Check if either parameter is not a number
  if (isNaN(a) || isNaN(b)) {
    throw new TypeError('Parameters must be numbers');
  }

  // Convert parameters to numbers
  a = Number(a);
  b = Number(b);

  // Round the numbers
  a = Math.round(a);
  b = Math.round(b);

  // Return the sum
  return a + b;
}

module.exports = calculateNumber;
