// const name = "Siba";
// let age = 23;
// let hobby = true;

//arrow function

// const summarizeUser = (userName, userAge, userHobby) => {
//   return (
//     "Name is " +
//     userName +
//     " and age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHobby
//   );
// };

// const add = (a, b) => a + b;

// console.log(summarizeUser(name, age, hobby));
// console.log(add(2, 3));

//Object

// const person = {
//   name: "Siba",
//   age: 29,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };
// person.greet();

// class Student {
//   constructor(name, age, mark) {
//     this.name = name;
//     this.age = age;
//     this.mark = mark;
//   }
//   setPlacementAge(minPlacementAge) {
//     return (miniMarks) => {
//       if (this.mark > miniMarks && this.age > minPlacementAge) {
//         console.log(this.name + " is ready for placement");
//       } else {
//         console.log(this.name + " is not ready for placement");
//       }
//     };
//   }
// }

// const Yash = new Student("yash", 25, 35);
// const siba = new Student("siba", 23, 100);
// const Yash = new Student("yash", 25, 35);
// const siba = new Student("siba", 23, 100);

// Yash.setPlacementAge(18)(40);

// const food = ["apple ", "oranges ", " ", " mango ", " ", " lemon "];
// console.log(
//   food.map((f) => {
//     if (f === " ") {
//       f = "empty string";
//     }
//     return f;
//   })
// );

// async function example() {
//   console.log("a");

//   console.log("b");
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("c"), 3000);
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("d"), 0);
//   });
//   let c = await promise;
//   let d = await promise2;
//   console.log(c);
//   console.log(d);
//   console.log("e");
// }
// example();

const http = require("http");
const fs = require("fs");
const { buffer } = require("stream/consumers");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // const msg = fs.readFile("message.txt");
    // console.log(msg);
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

  // if (url === "/home") {
  //   res.write("<html>");
  //   res.write("<head><title>My first page</title></head>");
  //   res.write("<body><h1>Welcome home</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }
  // if (url === "/about") {
  //   res.write("<html>");
  //   res.write("<head><title>My first page</title></head>");
  //   res.write("<body><h1>Welcome about page</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }
  // if (url === "/node") {
  //   res.write("<html>");
  //   res.write("<head><title>My first page</title></head>");
  //   res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }

  res.setHeader("Content-Type", "test/html");
});

server.listen(3000);
