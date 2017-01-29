var fs = require('fs');
var path = require('path');

var dirLoc = process.argv[2];
var extension = '.'+process.argv[3];

fs.readdir(dirLoc, function(err, list) {
  if (err) return console.error(err);
  for (let i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == extension) {
      console.log(list[i]);
    }
  }
});
