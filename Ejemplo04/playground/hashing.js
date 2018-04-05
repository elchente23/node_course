const {SHA256} = require("crypto-js"),
      jwt =require("jsonwebtoken"),
      bcrypt = require("bcryptjs");

let password = "123abc!";

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

let hashPassword = '$2a$10$V2BKJiFrbJej7cJpphSf3.5uHxMorys53rYOrj/lEBGoe2OW12Abm';

bcrypt.compare(password, hashPassword, (err, result) => {
    console.log(result);
});

// let data = {
//     id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log(token);

// let decoded = jwt.verify(token, '123abc');
// console.log(decoded);
// let message = 'I am user number 3';

// let hash = SHA256(message).toString();

// console.log(hash);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();



// let resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resulthash == token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }