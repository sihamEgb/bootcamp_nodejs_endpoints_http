const http = require('http');
const url = require('url');


const host = 'localhost';
const port = process.env.PORT || 3000;

let products = require("./Products");
let users = require("./Users");

function getUser(id){

}
const requestListener = function (req, res) {
	res.setHeader("Content-Type", "application/json");
	console.log("request",req.url);
	switch (req.url) {
		case "/usersapi":
			console.log("case 1");
				res.writeHead(200);
				res.end( JSON.stringify(users));
				break;
		case "/usersapi/:id":
			console.log("case 2");

			console.log("get user with id");
			res.writeHead(200);
			console.log(req.body);
			res.end( JSON.stringify(users));
			break;
		case "/products/*":
			console.log("case 3");

					// res.writeHead(200);
					// res.end(JSON.stringify(products));
					console.log("call products handler");
					break
		default:
					res.writeHead(404);
					res.end(JSON.stringify({error:"Resource not found"}));
    }
}


const server = http.createServer(requestListener);
server.listen(port , host,() => {
		console.log("server is up and running on port " + port);
})

