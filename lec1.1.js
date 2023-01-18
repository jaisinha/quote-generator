// const fs = require("fs");
// fs.writeFileSync("read.txt", "welcome to india");
// fs.appendFileSync("read.txt", " Hello there!");
// a = fs.readFileSync("read.txt"); //will show the data in the form of bffer data
// // now convert it in string using ->
// console.log(a.toString());

const fs = require("fs");
fs.writeFileSync("see.txt", "hello");
console.log(fs.readFileSync("see.txt").toString());
fs.renameSync("see.txt", "saw.txt");
