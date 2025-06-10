/*interface User{
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
*/

interface User {
    id : number;
    name: string,
    email: string,
    password: string,
}

interface Admin extends User{}

function conn(obj: Admin): string {
    obj.id = 1;
    obj.name = "Rajeev";
    obj.email = "rjranjan2112@gmail.com";
    obj.password = "password123";
    const userInfo = `User Id: ${obj.id}, Name: ${obj.name}, Email: ${obj.email}`;
    console.log(userInfo);
    return userInfo;
}

conn({ id: 0, name: "", email: "", password: "" });