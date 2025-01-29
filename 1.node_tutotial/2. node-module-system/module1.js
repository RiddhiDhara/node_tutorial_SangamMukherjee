function sum(a, b) {
  return a + b;
}
function diff(a, b) {
  return a - b;
}
function div(a, b) {
  // return b == 0 ? "Division by 0 is not allowed" : a/b;
  if (b === 0) {
    throw new Error("Divide by zero is not allowed");
  }
  return a / b; // Fixed: Return the division result
}
function mul(a, b) {
  return a * b;
}

module.exports = { sum, diff, div, mul };



