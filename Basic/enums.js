var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
var statusCode;
(function (statusCode) {
    statusCode["ABANDONED"] = "abandoned status code with 500";
    statusCode["NOTFOUND"] = "not found status code 404";
})(statusCode || (statusCode = {}));
console.log(statusCode.NOTFOUND);
