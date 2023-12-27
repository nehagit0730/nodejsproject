
//const fs = require('fs');
//fs.writeFileSync('new.txt','Hello this is new text');

const http = require('http');
http.createServer((req,resp)=>{      // =>(this is arrow function)
    resp.write("<h1>hello iam neha</h1>");
    resp.end();   //using for endind processing
}
).listen(4500); //creat and call server name :  localhost:4500(check this for result)
const colors= require('colors');
console.log("package.jason".red)
