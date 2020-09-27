const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 4040;

const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Apps catalogue API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
