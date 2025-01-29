console.log("node module wrapper demo")

console.log("wrapper-explorer -> __filename : ",__filename);
console.log("wrapper-explorer -> __dirname : ",__dirname);

module.exports.greet = (name)=>{
   console.log(`hello ${name}`);
}