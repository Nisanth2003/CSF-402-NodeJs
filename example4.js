//content is read in synchronus manner 
//synchronus->blocking
var fs = require("fs");
//synchronus read
var data = fs.readFileSync('ex.txt');
console.log(data.toString());
//console.log(data,toString()); will also give you the output but it shows in ascii format first

console.log("programme Treminated");