interface TransactionsObj {
    [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
}

const todayTransactions: TransactionsObj = {
    Pizza: -10,
    Books: -10,
    Job: 5
}

console.log(todayTransactions['Pizza'])
console.log(todayTransactions.Pizza)

let prop: string = 'Pizza'
console.log(todayTransactions.prop)

for (const key in todayTransactions) {
    console.log(`${key}: ${todayTransactions[key]}`)
}

const todaysNet = (transactions: TransactionsObj): number => {
    let total = 0
    for (const key in todayTransactions) {
        total += transactions[key]
    }
    return total
}

interface Student {
    // [key: string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Venkat',
    GPA: 3.4,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

//If we don't know about type of object then we can directly use type of main object itself

Object.keys(student).map(key => console.log(student[key as keyof typeof student]))

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'name')

//////////////////////////////////
// interface Incomes {
//     [key: string]: number
// }

type streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<streams, number>

const monthlyIncomes: Incomes = {
    salary: 1500000,
    bonus: 100000,
    sidehustle: 15000
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

