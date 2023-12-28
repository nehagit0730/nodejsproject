const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
for(i=0;i<4;i++)
{
  fs.writeFileSync(dirPath+"/filename"+i+".txt","A simple text file");
}
