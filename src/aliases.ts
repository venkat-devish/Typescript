type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type UserId = stringOrNumber

type student = {
    name: string,
    regNo: stringOrNumber
}

const venkat = {
    name: 'Venkata Surya',
    regNo: 17
}

const greetStudent = (student: student) => {
    console.log(`Hi ${student.name} reg. is ${student.regNo}`)
}

greetStudent(venkat);

