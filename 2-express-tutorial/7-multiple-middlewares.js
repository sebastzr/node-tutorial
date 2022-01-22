const express = require("express");
const app = express();

// For good practices define this method in another
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

const authorize = (req, res, next) => {
  console.log("Authorized");
  next();
};

// Applies to all bellow
app.use([logger, authorize]); //apply multiple middlewares

// Applies to /api/* routes
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
