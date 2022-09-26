import { ServerResponse, IncomingMessage } from "http";
import { DoEncoding, NormalizeString } from "./util.js";

const encodeMessage = (req: IncomingMessage, res: ServerResponse) : void => {
    // Read the data from the request
    let data = "";
 
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
 
    // When the request is done
    req.on("end", () => {
      let message = NormalizeString(data);
      message = DoEncoding(message);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(message);
    });
 };

 const notImplemented = (res: ServerResponse) : void => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end('Not Implemented');
 }

 export { encodeMessage, notImplemented} 