const express = require("express");
const app = express();

// req => middleware => res

// For good practices define this method in another
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // I could return the res
  // res.send('Home')

  // Or continue
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
