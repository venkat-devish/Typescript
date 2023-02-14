type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

const add = (a: number, b: number): number => {
    return a + b
}

const log = (message: any): void => {
    console.log(message)
}

let subtract = function (a: number, b: number): number {
    return a - b
}

let multiply: mathFunction = function (c, d) {
    return c * d;
}


console.log(add(2, 3))
console.log(subtract(10, 3))
console.log(multiply(10, 3))
log('Venkat')

//Optional
type sumType = (a: number, b: number, c?: number) => number

const addAll: sumType = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b
}

const multiplyAll: sumType = (a, b, c = 2) => {
    return a * b * c;
}

console.log(addAll(3, 4, 5))
console.log(addAll(3, 4))
console.log(multiplyAll(3, 4))

//Rest
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((acc, curr) => acc + curr, 0)
}

console.log(total(2, 3, 4, 5))

const createError = (err: string): never => {
    throw new Error(err)
}

createError('Key is missing')

//custom typeguard
type numberOrString = (string | number)
const isNum = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}
const isString = (value: any): boolean => {
    return typeof value === 'string' ? true : false
}

const predictNumber = (value: numberOrString): string => {
    if (isNum(value)) return 'String'
    if (typeof value === 'number') return 'Number'
    return createError('Not possible')
}

console.log(predictNumber(5))
