"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function user(name, email, isLogged) {
    return { name: name.toUpperCase(), email: email, isLogged: isLogged.valueOf() };
}
console.log(addTwo(5));
console.log(getUpper("rajeev"));
console.log(user("Ram", "ram@gmail.com", false));
