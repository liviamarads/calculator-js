function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {
  if (y == 0) {
    console.log("Second number cannot be 0");
    exit();
  } else {
    return x / y;
  }
}

module.exports = {
 sum,
 subtract,
 multiply,
 division
} 