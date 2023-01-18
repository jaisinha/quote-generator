const fs = require("fs");
fs.writeFile("read.txt", "Hello there!", (err) => {
  console.log("file is created");
});
