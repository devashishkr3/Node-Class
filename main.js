const {sayHello, getLogs} = require("./util.js");
const {OTPgenerator, sum} = require("./otpGenerator.js");




sayHello();
console.log(OTPgenerator());
getLogs();
sum(2,3);