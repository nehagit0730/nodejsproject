
//const fs = require('fs');
//fs.writeFileSync('new.txt','Hello this is new text');

const http = require('http');
const info = require('./data');
const port = 4500;
http.createServer((req,resp)=>{      // =>(this is arrow function)
    resp.writeHead(200, { 
        'Content-Type': 'application/json',
      });
    resp.write("<h1>hello iam neha</h1>");
    resp.write(JSON.stringify(info));
    resp.end();   //using for endind processing
}
)
.listen(port); //create and call server name :  localhost:4500(check this for result)
//const colors= require('colors');
//console.log("package".red)
