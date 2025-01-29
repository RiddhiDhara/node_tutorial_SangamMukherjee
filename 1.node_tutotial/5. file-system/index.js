const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

// this is synchronous way

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log(`${dataFolder} is created`);
} else {
  console.log(`${dataFolder} already exists`);
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello from node js");

console.log("file created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("readContentFromFile : ", readContentFromFile);

fs.appendFileSync(filePath, "\nthis is a new line");
console.log("new file content added");

// this is asynchronous way

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "hello async node js", (error) => {
  if (error) {
    throw error;
  }
  console.log("async file created successfully!!");

  fs.readFile(asyncFilePath, "utf-8", (error, data) => {
    if (error) throw error;
    console.log("async file data : ", data);

    fs.appendFile(asyncFilePath, "\nthis is an async content", (error) => {
      if (error) throw error;
      console.log("async appended successfully ");

      fs.readFile(asyncFilePath, "utf-8", (error, data) => {
        if (error) throw error;
        console.log("async file updated data : ", data);
      });
    });
  });
});


  //    note that if i write here without nesting the function as done above then due to concurrent execution the order of the output may change

  //    fs.appendFile(asyncFilePath, "\nthis is an async content", (error) => {
  //      if(error) throw error;
  //      console.log("async appended successfully ");
  //    })