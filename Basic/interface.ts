interface User{
    id: number;
    name: string;
    email: string;
    password: string;

}

let user: User = {
    id: 1,
    name: "Rajeev",
    email: "rjranjan2112@gmail.com",
    password: "password123",
    
}

function getDataOfUser(user: User): string {
    const userInfo = `User Id: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
    console.log(userInfo);
    return userInfo;
}

getDataOfUser(user);