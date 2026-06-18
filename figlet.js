// NPM - Node Package Manager

const figlet = require("figlet");

exports.namePrint = (name) => {
  figlet (name, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
}