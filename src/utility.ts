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