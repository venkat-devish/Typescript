//Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const assign1 = {
    studentId: '17BEC1177',
    title: 'Final Project',
    grade: 0,
}

const updateAssignment = (assign: Assignment, updateProps: Partial<Assignment>): Assignment => {
    return { ...assign, ...updateProps }
}

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })
console.log(assignGraded)

//Required & Readonly

const requiredAssign = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

requiredAssign({ ...assignVerified, verified: true })

//Record

const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
}

type Students = 'Venkat' | 'Nagarjuna'
type Grades = 'A' | 'B' | 'C' | 'D' | 'N'

const finalGrades: Record<Students, Grades> = {
    Venkat: 'A',
    Nagarjuna: 'B'
}

type marks = {
    assign1: number,
    assign2: number
}

const markGrades: Record<Students, marks> = {
    Venkat: { assign1: 95, assign2: 92 },
    Nagarjuna: { assign1: 90, assign2: 92 },
}

//Pick & omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>
type AssignOmitResult = Omit<Assignment, 'grade' | 'verified'>

const score: AssignResult = {
    studentId: '17',
    grade: 95
}

const omitScoreDet: AssignOmitResult = {
    studentId: 'BEC17',
    title: 'Final Project'
}

//Exclude & Extract

type adjustGrades = Exclude<Grades, 'N'>
type highGrades = Extract<Grades, 'A' | 'B'>

//Non Nullable

type AllNames = 'Venkat' | 'Nagarjuna' | null | undefined
type typeNamesOnly = NonNullable<AllNames>

//Return Type
// type Assign = { title: string, points: number }

const createAssignType = (title: string, points: number) => {
    return { title, points }
}

type NewAssign = ReturnType<typeof createAssignType>

const newAssignFunc: NewAssign = createAssignType('Venkat', 75)
console.log(newAssignFunc)

type ParamsAssign = Parameters<typeof createAssignType>

const assignParams: ParamsAssign = ['venkat', 75]

const assignParamsCheck: NewAssign = createAssignType(...assignParams)

//Awaited

interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .catch(err => {
            if (err instanceof Error) {
                console.log(err.message)
            }
        })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(res => console.log(res))