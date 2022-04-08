const express = require("express");
const app = express();
const port = 4000;

app.get("/api/addresses", (_, res) => {
  res.json({
    addresses: [
      {
        name: "Ned Stark",
        address1: "123 Main Street",
        address2: "apt# 1",
        city: "Winterfell",
        state: "cold",
        zip: 12345,
        phone: "925-2555-351",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Address Book server running at http://localhost:${port}`);
});
