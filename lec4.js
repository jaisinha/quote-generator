const EventEmitter = require("events");
const event = new EventEmitter();
event.emit("saymyName");
event.on("saymyName", () => {
  console.log("Your name is vinod");
});
event.on("saymyName", () => {
  console.log("Your name is vinod");
});
event.on("saymyName", () => {
  console.log("Your name is vinod");
});
event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 2000, "k");
