// import module
const exp = require('constants');
const express = require('express');
const router = express.Router();
const path = require('path');

// var url = require("url");
// var fs = require('fs');

// Static Middleware
router.use(express.static(path.join(__dirname, 'public')));

// Routing
// Index
router.get('/', function (req,res) {
    res.render('top/index');
})
// About
router.get('/about', function (req, res) {
    res.render('top/about');
})
// API
router.get('/api', function (req, res) {
    res.render('top/api');
})

// Export module
module.exports = router;

// // define 'renderFile' function
// function renderFile(path, response, contentType){
//     fs.readFile(path, null, function(error, data) {
//         if (error) {
//             console.log(error); 
//             response.writeHead(404);
//             response.write("Page not found");
//             response.end();
//         } else {
//             response.writeHead(200, {'Content-Type': contentType});
//             response.write(data);
//             response.end();
//         }
//     });
// }


// // define 'renderHTML' function
// function renderHTML(path, response){
//     renderFile(path, response, 'text/html');
// }

// // define 'renderCSS' function
// function renderCSS(path, response) {
//     renderFile(path, response, 'text/css');
// }

// // define 'renderJS' function
// function renderJS(path, response){
//     renderFile(path, response, 'text/plain');
// }

// // define 'renderIMG' function
// function renderIMG(path, response){
//     renderFile(path, response, 'image/jpeg');
// }


// // define 'handleRequest' module
// // module.exports = literal | function | object
// const handleRequest = (request, response) => {
//     // url.parse(urlString): takes a URL string, parses it, and returns a URL object.
//     // url.pathname: Gets and sets the path portion of the URL.
//     var path = url.parse(request.url).pathname;
//     switch(path){
//         // 1. Index
//         case '/' :
//             renderHTML('./index.html', response);
//             break;
//         case '/index.css' :
//             renderCSS('./index.css', response);
//             break;
//         case '/images/footer.jpg':
//             renderIMG('./images/footer.jpg', response);
//             break;
//         // 2. About
//         case '/about':
//             renderHTML('./about.html', response);
//             break;
//         case '/about.css':
//             renderCSS('./about.css', response);
//             break;
//         // 3. API
//         case '/api':
//             renderHTML('./api.html', response);
//             break;
//         case '/api.css':
//             renderCSS('./api.css',response);
//             break;
//         case '/api.js':
//             renderJS('./api.js', response);
//             break;
//         // 4. default
//         default:
//             response.writeHead(404);
//             response.write('Page not found');
//             response.end();
//     }
// }

// module.exports = handleRequest;


// module.exports = {
//     handleRequest: function(request, response) {         
//         // url.parse(urlString): takes a URL string, parses it, and returns a URL object.
//         // url.pathname: Gets and sets the path portion of the URL.
//         var path = url.parse(request.url).pathname;
//         switch(path){
//             // 1. Index
//             case '/' :
//                 renderHTML('./index.html', response);
//                 break;
//             case '/index.css' :
//                 renderCSS('./index.css', response);
//                 break;
//             // case '/images/top.jpg' :
//             //     renderIMG('./images/top.jpg', response);
//             //     break;
//             // case '/images/News_API.jpg':
//             //     renderIMG('./images/News_API.jpg', response);
//             //     break;
//             // case '/images/Pokemon_API.jpg':
//             //     renderIMG('./images/Pokemon_API.jpg', response);
//             //     break;
//             // case '/images/Flashcard.jpg':
//             //     renderIMG('./images/Flashcard.jpg', response);
//             //     break;
//             case '/images/footer.jpg':
//                 renderIMG('./images/footer.jpg', response);
//                 break;
//             // 2. About
//             case '/about':
//                 renderHTML('./about.html', response);
//                 break;
//             case '/about.css':
//                 renderCSS('./about.css', response);
//                 break;
//             // 3. API
//             case '/api':
//                 renderHTML('./api.html', response);
//                 break;
//             case '/api.css':
//                 renderCSS('./api.css',response);
//                 break;
//             case '/api.js':
//                 renderJS('./api.js', response);
//                 break;
//             // 4. default
//             default:
//                 response.writeHead(404);
//                 response.write('Page not found');
//                 response.end();
//         }
//     }
// }