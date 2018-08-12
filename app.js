let os =require("os")
let http = require("http");
let greet = require("./greet")
let User = require("./user")

let pavel = new User("Pavel", 22)
pavel.sayHi()

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greet.date}`)
console.log(greet.getMessage(userName))