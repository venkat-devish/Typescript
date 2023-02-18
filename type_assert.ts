type One = string;
type Two = string | number;
type Three = 'hello';


let a: One = 'Venkat';
let b = a as Two;
let c = a as Three;

type strOrNum = string | number;
type addOrConcatType = (a: number, b: number, c: 'add' | 'concat') => strOrNum;

const addOrConcat: addOrConcatType = (a, b, c) => {
    if (c === 'add') return a + b;
    return '' + a + b
}

let res: number = addOrConcat(5, 7, 'add') as number;
let res2: string = addOrConcat(5, 7, 'concat') as string;
console.log(res)
console.log(res2)