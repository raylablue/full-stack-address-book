const addressPath = "/addresses";
const express = require("express");

const addressInit = (AddressModel) => {
  const router = express.Router();

  router.get(addressPath, async (_, res) => {
    const addresses = await AddressModel.find();

    res.json({
      addresses,
    });
  });

  router.get(`${addressPath}/:id`, async (req, res) => {
    const address = await AddressModel.findById(req.params.id);
    await address.save();
    
    res.send(address);
  })

  router.post(addressPath, async (req, res) => {
    try {
      const newAddress = new AddressModel(req.body);
      await newAddress.save();
      res.status(200);
      res.send(newAddress);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.put(`${addressPath}/:id`, async (req, res) => {
    try {
      const address = await AddressModel.findById(req.params.id);
      const { name, address1, address2, city, state, zip, phone } = req.body;
      address.name = name;
      address.address1 = address1;
      address.address2 = address2;
      address.city = city;
      address.state = state;
      address.zip = zip;
      address.phone = phone;
      await address.save();

      res.send(address);
      res.status(200);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.delete(`${addressPath}/:id`, async (req, res) => {
    try {
      await AddressModel.deleteOne({ _id: req.params.id });
      //@TODO: message should change depending on if there was no id to delete.
      res.send(`deletion of address for ${req.params.id} was successful`);
      res.status(200);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};

module.exports = {
  addressInit,
};
