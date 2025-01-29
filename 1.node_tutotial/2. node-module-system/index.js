const module1 = require("./module1.js");

console.log(module1.sum(4,2));
console.log(module1.diff(4,2));
// console.log(module1.div(4,0));
console.log(module1.mul(4,2));


try {
    console.log("trying to divide by zero");
    let result = module1.div(0, 0);
    console.log(result, "result");
  } catch (error) {
    console.log("Caught an error", error.message);
  }


// //module wrapper
// (
//     function(exports, require, module, __filename, __dirname){
//         //your module code goes here
//     }
// )