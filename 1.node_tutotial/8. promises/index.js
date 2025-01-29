function delayFn(time, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Promise rejected due to an error");
      } else {
        resolve("Promise resolved successfully");
      }
    }, time);
  });
}

console.log("promise lecture starts");

delayFn(2000, false)
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error));

delayFn(3000, true)
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error));

console.log("end");

// another function

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("error occured due to divisor being 0 ");
    }
    const ans = num1 / num2;
    resolve(`the ans is ${ans}`);
  });
}

divide(4, 2)
  .then((result) => console.log("result : ", result))  // resolve comes to then
  .catch((error) => console.log("error : ", error));  // reject comes to catch
