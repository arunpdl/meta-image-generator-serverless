import { IncomingMessage, ServerResponse } from "http";

export default async function handler(
    req: IncomingMessage,
    res: ServerResponse
) {
    try {
        console.log(req.headers);



        res.statusCode === 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Hello world</h1>");
    } catch (err) {
        res.statusCode === 500;
        res.setHeader("Content-Type", "text/html");
        res.end(
            "<h1>Internal Server Error 500</h1><p>Sorry, an error occured.</p>"
        );
        console.error(err);
    }
}
