const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { createAddressModel } = require("./models/model-address");
const { createKittenModel } = require("./models/model-kittens");
const { getAddresses, postAddress } = require("./endpoints/endpoint-addresses");
const { getKittens, postKitten } = require("./endpoints/endpoint-kittens");

const port = 4000;
const app = express();
app.use(bodyParser.json());

async function init() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ems6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const Address = createAddressModel(mongoose);
    const Kitten = createKittenModel(mongoose);

    getAddresses(app, Address);
    postAddress(app, Address);

    getKittens(app, Kitten);
    postKitten(app, Kitten);

    app.listen(port, () => {
      console.log(
        `Address Book server running at http://localhost:${port}/api/addresses`,
        `Kittens can be found at http://localhost:${port}/api/kittens`
      );
    });
  } catch (error) {
    console.error("application failed to initialize", error);
  }
}

init().then(() => {});
