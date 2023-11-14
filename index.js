// Importing required modules
var fs = require('fs');
var https = require('https');

// Importing the main app file
const app = require("./src/app");
const serverConfig = require('../config/serverConfig');

// Defining the port number and host address
const PORT = serverConfig.port;
const HOST = serverConfig.host;

// If HTTPS is enabled, create an HTTPS server
if (serverConfig.https.enabled === "true") {
  // Setting up the required SSL certificates
  const options = {
    key: fs.readFileSync(serverConfig.https.key),
    cert: fs.readFileSync(serverConfig.https.cert),
    rejectUnauthorized: false
  };

  // Creating an HTTPS server and attaching the app to it
  var httpsServer = https.createServer(options, app);

  // Starting the server
  httpsServer.listen(PORT, HOST, function (error) {
    if (!error)
      console.log("Server is Successfully Running on HTTPS:", PORT);
    else
      console.log("Error occurred, server can't start", error);
  });
} else { // If HTTPS is not enabled, start the server in HTTP mode
  app.listen(PORT, HOST, (error) => {
      if (!error) {
        console.log("Server is Successfully Running on HTTP:", PORT);
     
    } else {
        console.log("Error starting HTTP server:", error);
    }
  });
}
