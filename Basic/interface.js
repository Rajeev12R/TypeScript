var user = {
    id: 1,
    name: "Rajeev",
    email: "rjranjan2112@gmail.com",
    password: "password123",
};
function getDataOfUser(user) {
    var userInfo = "User Id: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email);
    console.log(userInfo);
    return userInfo;
}
getDataOfUser(user);
