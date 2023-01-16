//Arrays

let stringArr = ["one", "hey", "Venkat"];

let guitars = ["Strat", "VVSISHH", 5150];

let mixedData = ["EVH", 1984, true];

stringArr.push("Hiii");
stringArr[0] = "Sundar";

guitars[0] = 1984;
guitars.unshift("Yamaha");

let test = [];
let bands: string[] = [];
bands.push("Glinx");

console.log(guitars);

//Tuple

let myTuple: [string, number, boolean] = ["Venkat", 1999, true];
console.log(myTuple);

//Objects

let myObj: object;
myObj = [];
myObj = guitars;
console.log(typeof myObj);

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

let gui: Guitarist = {
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

const greetTheGuitarist = (guitarist: Guitarist) => {
  return guitarist.name ? `Hey ${guitarist.name.toUpperCase()}!` : "Hello!";
};

console.log(greetTheGuitarist(evh));
console.log(greetTheGuitarist(gui));

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade);

//Type aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type artist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;
