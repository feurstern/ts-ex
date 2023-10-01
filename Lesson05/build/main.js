"use strict";
// end of type aliases
//  Literal types'
let icon;
icon = '🇷🇺';
console.log(icon);
// end of literal types
// functions 
const circumferences = (l, w, h = 4) => {
    return l * w * h;
};
// this function has no return
const logMessage = (msg) => {
    console.log(`Here your message : ${msg}`);
};
logMessage('Hi there');
console.log(circumferences(2, 5, 2));
