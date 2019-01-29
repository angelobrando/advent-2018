var dataArray = [];
// Read the file and print its contents.

var fs = require('fs')
    , filename = 'day2/datas.txt';
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);

    var dataArray = data.split("\n");
});
 function f() {

 }