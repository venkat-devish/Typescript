const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (c: number, d: number): number => {
  return c - d;
};

const logMsg = (msg: any): void => {
  console.log(msg);
};

console.log(add(2, 3));

logMsg("Hellllo!!");
logMsg(add(5, 2));
logMsg(subtract(7, 1));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (p, q) => {
  return p * q;
};

logMsg(multiply(7, 5));

//Optional Parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

logMsg(addAll(5, 10, 15));

const sumAll = (a: number, b: number, c: number = 5): number => {
  return a + b + c;
};

logMsg(sumAll(5, 10));

//Rest Parameters
const total = (a: number, ...nums: number[]) => {
  return a + nums.reduce((prev, curr) => prev + curr, 0);
};

console.log(total(1, 2, 3, 4));
