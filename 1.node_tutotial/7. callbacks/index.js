const fs = require("fs");

function person(name, callbackFn){
    console.log(`hello I am ${name}`);
    callbackFn();
    
}

function address(){
    console.log("shyamnagar");
}

person("Riddhi",address);


fs.readFile('input.txt','utf-8',(error,data) => {
    if(error){
        console.error("error reading file : ", error);
    }
    else{
       console.log("data read : ",data);
    }
})
