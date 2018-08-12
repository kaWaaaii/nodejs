let http = require("http");
http.createServer((request,response) => {
	response.end("Hello NodeJs");
}).listen(3000, "127.0.0.1",()=>{
	console.log("Сервер начал прослушивание запросов с порта 3000")
})