var fs = require('fs');
var path = require('path');

module.exports = list;

function list(dirLoc, extension, callback) {
  fs.readdir(dirLoc, function(err, list) {
    if (err) {
      callback(err);
    }
    else {
      var filteredList = [];
      for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == '.' + extension) {
          filteredList.push(list[i]);
        }
      }
      callback(null, filteredList);
    }
  }
)};
