// import modules
const http = require("http");
const router = require("./router");

// define PORT number
const PORT = 8000;

// create server
http.createServer(router.handleRequest).listen(PORT);
