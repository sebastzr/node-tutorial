const express = require("express");
const app = express();
let { people } = require("./2-express-tutorial/content/data");

app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
