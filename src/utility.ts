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