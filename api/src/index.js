const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const { createAddressModel } = require("./models/model-address");
const { addressInit } = require("./endpoints/endpoint-addresses");

const MONGODB_URL =
  "mongodb+srv://admin:admin@cluster0.kp4cc.mongodb.net/?retryWrites=true&w=majority";
const port = 4000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

async function init() {
  try {
    await mongoose.connect(MONGODB_URL);
    const Address = createAddressModel(mongoose);

    const router = addressInit(Address);
    app.use("/api", router);

    app.listen(port, () => {
      console.log(
        `Address Book server running at http://localhost:${port}/api/addresses`
      );
    });
  } catch (error) {
    console.error("application failed to initialize", error);
  }
}

init().then(() => {});
