var files_module = require('./files_module.js');

files_module(process.argv[2], process.argv[3], function(err, data) {
  if (err) console.error(err);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});
