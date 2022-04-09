const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { createAddressModel } = require("./models/model-address");

const port = 4000;
const app = express();
app.use(bodyParser.json());

async function init() {
  try {
    // @TODO Create a kitten array like addresses
    // @TODO Move the kitten and address HTTP login into their own files
    // @TODO make it so a failed HTTP POST does not crash the entire app with a zip as an array
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ems6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const Address = createAddressModel(mongoose);

    app.get("/api/addresses", async (_, res) => {
      const addresses = await Address.find();

      res.json({
        addresses,
      });
    });

    app.post("/api/addresses", async (req, res) => {
      const newAddress = new Address(req.body);
      await newAddress.save();
      res.send(newAddress);
    });

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
