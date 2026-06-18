// console.log('Hello World!');
// // console.log(2+2);

// let n = 6;
// for(let i = 1; i <= n; i++) {
//     let row= '';
//     for(let j=1; j<=i; j++){
//         row = row + "*";
//     }
//     console.log(row);
// }

// for(let i=n-1;i>=1;i--){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row = row + "*";
//     }
//     console.log(row);
// }

// let args = process.release;
// console.log(args);



// *
// * *
// * * *
// * * * *
// * * *
// * *
// *


let OTPgenerator = () =>{
    let OTP = Math.floor(Math.random() * 1000000);
    return OTP;
}

let sum = (a,b) =>{
    console.log(a+b);
}

module.exports = {OTPgenerator, sum};

