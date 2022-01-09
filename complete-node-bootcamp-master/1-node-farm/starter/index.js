// ! //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! Modules
const fs = require("fs");
const http = require("http");

// * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Reading and Writing files - Synchronously
/*

// Is blocking, synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

*/

// * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Reading and Writing files - Asynchronously
/*

// Is Non-blocking, synchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR 💥");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been writeen 😃");
      });
    });
  });
}); // The third parameter is the call-back function, which will execute once the file reading in the first parameter is ready
console.log("Will read file...");

*/

// * //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Creating a Simple Web Server

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server!");
}); // Request and Response variables -- Each time a new request to the server will have this response

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
