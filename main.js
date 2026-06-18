const {sayHello, getLogs} = require("./util.js");
const {OTPgenerator, sum} = require("./otpGenerator.js");
const {namePrint} = require("./figlet.js");




sayHello();
console.log(OTPgenerator());
getLogs();
sum(2,3);
namePrint("Tanya");
namePrint("Sourav");
namePrint("Sachin");
namePrint("Sammi");
namePrint("Bibhuti");
