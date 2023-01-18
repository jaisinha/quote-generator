const bioData = {
  name: "jai",
  age: 34,
};
const fs = require("fs");
const jsonData = JSON.stringify(bioData);
// fs.writeFile("file.json", jsonData, (err) => {
//   console.log("Done");
// });
fs.readFile("file.json", "utf-8", (err, data) => {
  console.log(err);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
