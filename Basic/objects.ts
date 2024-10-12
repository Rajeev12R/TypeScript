const User = {
    name: "Rajeev",
    email: "rajeev@gmail.com",
    isActive: true
}

let createUser = ({name: string, isPaid: boolean }) {}

function createCourse():{name: string, price: number} {
    return {name: "reactjs", price: 345} 
}
createUser(createUser)

export {}