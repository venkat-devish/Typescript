interface TransactionObj {
    readonly [index: string]: number,
    Pizza: number,
    Books: number,
    Job: number
}

const todayTransactions: TransactionObj = {
    Pizza: -10,
    Books: -10,
    Job: -10
}

console.log(todayTransactions['Pizza'])
console.log(todayTransactions.Pizza)

let prop: string = 'Pizza';
console.log(todayTransactions[prop]);

const todaysNet = (transactions: TransactionObj) => {
    let total = 0;
    for (let key in todayTransactions) {
        total += todayTransactions[key]
    }
    return total;
}

console.log(todaysNet(todayTransactions))

/////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined,
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: 'Venkat',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student[test])

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudent = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudent(student, 'GPA');

////////////////////////////////////////////

