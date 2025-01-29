const path = require("path");

console.log("directory name : ", path.dirname(__filename));
console.log("file name : ", path.basename(__filename));
console.log("file extension : ", path.extname(__filename));

const joinPath = path.join("/user", "games", "pc games", "call of duty");
console.log("joined path : ", joinPath);

const resolvedPath = path.resolve("user", "games", "pc games", "call of duty");
console.log("resolved path : ",resolvedPath);

const normalisedPath = path.normalize("/user/.document/../node/projects");
console.log("normalized path : ", normalisedPath);