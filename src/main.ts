import http from "http";

// import controller
import { encodeMessage, notImplemented } from "./controller.js";

// create the http server
const server = http.createServer((req, res) => {
   // Encode a message
   if (req.method == "POST" && req.url == "/api/encode") {
     return encodeMessage(req, res);
   }
   else return notImplemented(res);

});

// set up the server port and listen for connections
server.listen(3000, () => {
   console.log("Server is running on port 3000");
});
