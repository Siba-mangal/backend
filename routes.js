const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    const data = fs.readFileSync("message.txt", "utf8");

    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(`<p>${data.toString()}</p>`);
    res.write(
      "<body><p></p><form action='/message' method='POST'><input type='test' name='message'><button type='submit'>Add</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "test/html");
};

//1st
// module.exports = requestHandler;

//2nd
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded test",
// };

//3rd

exports.handler = requestHandler;
exports.someText = "Some hard coded test";
