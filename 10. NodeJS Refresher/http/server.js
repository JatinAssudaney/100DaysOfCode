const http = require("http");

const todos = [
  {
    id: 1,
    text: "Todo One",
  },
  {
    id: 2,
    text: "Todo Two",
  },
  {
    id: 3,
    text: "Todo Three",
  },
];

const server = http.createServer((req, res) => {
  // res.statusCode = 404;
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.js");

  res.writeHead(404, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js",
  });

  res.end(
    JSON.stringify({
      success: false,
      error: "Not Found",
      data: null,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server Running on ${PORT}`));
