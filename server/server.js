var http = require("http");
var url = require("url");

// Import Directory Structure
let dirRoot = require("./directory");

// Traverse Directory and return data
function traversePath(pathList) {
  if (pathList.length === 1) { // Check for path listed after '/path'
    return {type: "None"};
  }
  else if (pathList[1] !== "root") { // Check that the path starts at '/root'
    return {type: "None"};
  }
  else { // Scale the directory path
    curObj = dirRoot;
    for (var i=2; i<pathList.length; i++) {

      if (curObj.children && curObj.children[pathList[i]]) {
        curObj = curObj.children[pathList[i]];

      } else { // Pause traversal if path not valid
        console.log("Attemped to access subdirectory " + pathList[i] + ", which does not exist");
        return packagePathObj(curObj);
      }
    }
    
    return packagePathObj(curObj);
  }
}

// Obtain Directory Information
function packagePathObj(pathObj) {
  if (pathObj.children) {
    return ({
      type: pathObj.type,
      children: Object.getOwnPropertyNames(pathObj.children)
    });
  }
  else {
    return ({
      type: pathObj.type
    });
  }
}

// Server
var server = http.createServer((req, res) => {
  // Parse URL
  var parsedURL = url.parse(req.url, true);

  // Get path from URL
  var path = decodeURI(parsedURL.pathname).replace(/"/g,"");
  var paths = path.split('/').slice(1);

  // Get information on current directory
  var curPathObj = {type: "None"};
  if (paths[0] === "path") {
    curPathObj = traversePath(paths);
  }
  
  // Send response
  res.writeHead(200, {  "Access-Control-Allow-Origin": "http://localhost:3000",
                        "Content-Type": "application/json"
  });
  res.write(JSON.stringify(curPathObj));
  return res.end();
  
});

// Local Port Connection
server.listen(8000, () => {console.log("Server is listening on port 8000")});