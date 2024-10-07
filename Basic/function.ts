function addTwo(num: number){
    return num + 2;
}
function getUpper(val : string){
    return val.toUpperCase();
}
function user(name : string, email: string, isLogged: boolean){
    return {name: name.toUpperCase() , email: email, isLogged: isLogged.valueOf()}
}

console.log(addTwo(5));
console.log(getUpper("rajeev"));
console.log(user("Ram", "ram@gmail.com", false));



export {}