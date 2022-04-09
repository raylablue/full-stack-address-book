const express = require("express");
const bodyParser = require("body-parser");
const { add } = require("husky");

const port = 4000;
const addresses = [];

const app = express();
app.use(bodyParser.json());

app.get("/api/addresses", (_, res) => {
  res.json({
    addresses,
  });
});

app.post("/api/addresses", (req, res) => {
  addresses.push(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(
    `Address Book server running at http://localhost:${port}/api/addresses`
  );
});
