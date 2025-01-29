function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayFn(2000);
  console.log(name);
}

delayedGreet("Riddhi");

async function division(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("cannot divide by 0");
    }
    return num1 / num2;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

async function mainFn() {
  console.log(await division(8, 0));
  console.log(await division(8, 2));
}

mainFn();

// function delayedFn(time) {
//     return new Promise((resolve, reject) => {
//       return setTimeout(() => resolve("this is printed after 2 sec"), time);
//     });
//   }

//   async function delayedGreet(name) {
//     const result = await delayedFn(2000);
//     console.log(result);
//     console.log(name);
//   }

//   delayedGreet("Riddhi")

// ===================================== notes

/* 
note that await and .then has a difference : 

->await pauses the execution of the current function (inside the async function) until the promise is resolved.
->When you use await, the function doesn’t continue to the next line of code until the promise resolves. So it essentially makes asynchronous code behave like synchronous code.

->.then() does not pause the execution of the function where it’s called. Instead, it attaches a handler (the .then() callback) to the promise, and the function continues to run.
->The result of the promise is handled asynchronously, meaning .then() doesn't stop the rest of the code from running while waiting for the promise to resolve.

*/
