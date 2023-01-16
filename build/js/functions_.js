"use strict";
const add = (a, b) => {
    return a + b;
};
const subtract = (c, d) => {
    return c - d;
};
const logMsg = (msg) => {
    console.log(msg);
};
console.log(add(2, 3));
logMsg("Hellllo!!");
logMsg(add(5, 2));
logMsg(subtract(7, 1));
let multiply = (p, q) => {
    return p * q;
};
logMsg(multiply(7, 5));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(5, 10, 15));
const sumAll = (a, b, c = 5) => {
    return a + b + c;
};
logMsg(sumAll(5, 10));
//Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};
console.log(total(1, 2, 3, 4));
