var fs = require('fs');
var path = process.argv[2];

var fileBuffer = fs.readFileSync(path);
console.log(fileBuffer.toString().split('\n').length-1);
