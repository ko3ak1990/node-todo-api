const {SHA256} = require('crypto-js');
const {jwt} = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var message = "I'm user number 3";
var hash = SHA256(message).toString();


var data = {
    id: 10
};


var password = '123abc!';
var passwordHashed = '$2a$10$3xoxlpTRuxpaY4BleML9TO/MEJkNJJGf.WPcXMEye5umms0ZMFDSq';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
});


bcrypt.compare('123a', passwordHashed, (err, res) => {
    console.log("equal:", res);
});