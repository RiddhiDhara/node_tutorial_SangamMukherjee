const lodash = require("lodash");

const names = [
  "riddhi dhara",
  "mia khalifa",
  "xiao yan",
  "lin dong",
  "wang lin",
];
const capitalized = lodash.map(names, lodash.capitalize);

console.log(capitalized);