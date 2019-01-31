//global var to read file
var file2read = 'day2/datas.txt';
var DataArray = [];
var Counter2 = 0;
var Counter3 = 0;
//read the datafile
var fs = require('fs');
fs.readFile(file2read,"utf8", function (err, data){
    if (err)throw err;
logic(data)
});

//split strings into array and replace \r
function logic(data) {
    let arrayData = data.split('\n');
    for (let i = 0; i < arrayData.length; i++) {
        DataArray[i] = arrayData[i].replace("\r", "");
    }
    //console.log(DataArray);
    //console.log("We succesfully read all thats needed. we got the data brudda");
    countthesenumbas(DataArray)
}

//finna count these numbas
function countthesenumbas(Data) {
    let alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //console.log(Data);
    //console.log("We succesfully recieved information from previous function");
    for (let i = 0; i < Data.length; i++) {

        while (i = i){}

        var matches = Data[i].match(alphabet[i]);
        console.log(matches.length);
        if (matches.length > 1){
        switch (matches.length) {
                case 2:
                    Counter2++;
                    break;
                case 3:
                    Counter3++;
                    break;
            default: continue;
            }}

        //if (matches.length > 1){
        //    console.log(matches.length);
    }
    console.log("The Counter that counts seconds = " +Counter2);
    console.log("The Counter that counts thirds = " +Counter3)
}




