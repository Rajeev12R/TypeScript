interface User{
    id: number;
    name: string;
    email: string;
    password: string;

}

function getDataOfUser(user: User): string {
    return `User Id: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
}