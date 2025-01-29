const fs = require("fs");

fs.readFile("input.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("error reading file input.txt : ", error);
    return;
  }
  const modifiedData = data.toUpperCase();
  fs.writeFile("output.txt", modifiedData, (error) => {
    if (error) {
      console.error("error writing file : ", error);
      return;
    }
    console.log("data written in a new file named output.txt");

    fs.readFile("output.txt", "utf-8", (error, data) => {
      if (error) {
        console.error("error reading file output.txt : ", error);
        return;
      }
      console.log("data read in output.txt : ", data);
    });
  });
});


// in short : callback inside callback inside callback .... is called callback hell