const stringEcho = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null
}

// console.log(isObj(true))
// console.log(isObj({ a: 'bane' }))

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const isTrue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}

// console.log(isTrue([1, 2]))
// console.log(isTrue([]))
// console.log(isTrue(null))
// console.log(isTrue(1))
// console.log(isTrue(undefined))

interface HasId {
    id: number
}

const processUser = <T extends HasId>(arg: T): T => {
    return arg
}

// console.log(processUser({ id: 1234, name: 'venkat' }))

const obj = [{
    'id': 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}]

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

console.log(getUsersProperty(obj, 'id'))