"use strict";
//Arrays
let stringArr = ["one", "hey", "Venkat"];
let guitars = ["Strat", "VVSISHH", 5150];
let mixedData = ["EVH", 1984, true];
stringArr.push("Hiii");
stringArr[0] = "Sundar";
guitars[0] = 1984;
guitars.unshift("Yamaha");
let test = [];
let bands = [];
bands.push("Glinx");
console.log(guitars);
//Tuple
let myTuple = ["Venkat", 1999, true];
console.log(myTuple);
//Objects
let myObj;
myObj = [];
myObj = guitars;
console.log(typeof myObj);
let gui = {
    name: "VVSISHH",
    active: true,
    albums: [225, "Phases", 897485],
};
let evh = {
    //   name: "Sundar",
    active: false,
    albums: ["I", "II", "IV"],
};
// gui = evh;
console.log(gui);
const greetTheGuitarist = (guitarist) => {
    return guitarist.name ? `Hey ${guitarist.name.toUpperCase()}!` : "Hello!";
};
console.log(greetTheGuitarist(evh));
console.log(greetTheGuitarist(gui));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade);
