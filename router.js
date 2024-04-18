// import module
var url = require("url");
var fs = require('fs');

// define 'renderHTML' function
function renderHTML(path, response){
    // fs.readFile(filename, encoding, callback_function)
    // encoding: It holds the encoding of the file. Its default value is ‘utf8’.
    // callback_function: function that is called after reading of file. It takes two parameters:
    // err: If any error occurred.
    // data: Contents of the file.
    fs.readFile(path, null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write("Page not found");
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    });
}

// define 'renderCSS' function
function renderCSS(path, response){
    fs.readFile(path, null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write("Page not found");
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(data);
        }
        response.end();
    });
}

// define 'renderJS' function
function renderJS(path, response){
    fs.readFile(path, null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write("Page not found");
        }
        else{
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write(data);
        }
        response.end();
    });
}

// define 'renderIMG' function
function renderIMG(path, response){
    fs.readFile(path, null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write("Page not found");
        }
        else{
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(data);
        }
        response.end();
    });
}

// define 'handleRequest' module
// module.exports = literal | function | object
module.exports = {
    handleRequest: function(request, response) {         
        // url.parse(urlString): takes a URL string, parses it, and returns a URL object.
        // url.pathname: Gets and sets the path portion of the URL.
        var path = url.parse(request.url).pathname;
        switch(path){
            // 1. index page
            case '/' :
                renderHTML('./index.html', response);
                break;
            case '/index.css' :
                renderCSS('./index.css', response);
                break;
            case '/images/top.jpg' :
                renderIMG('./images/top.jpg', response);
                break;
            // 2. about page
            case '/about':
                renderHTML('./about.html', response);
                break;
            // case '/project':
            //     renderHTML('./project.html', response);
            //     break;

            // 3. API page
            case '/api':
                renderHTML('./api.html', response);
                break;

            // 4. default
            default:
                response.writeHead(404);
                response.write('Page not found');
                response.end();
        }
    }
};