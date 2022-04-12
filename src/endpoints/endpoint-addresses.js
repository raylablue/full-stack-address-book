const addressPath = "/addresses";
const express = require("express");

const addressInit = (address) => {
  const router = express.Router();

  router.get(addressPath, async (_, res) => {
    const addresses = await address.find();

    res.json({
      addresses,
    });
  });

  router.post(addressPath, async (req, res) => {
    try {
      const newAddress = new address(req.body);
      await newAddress.save();
      res.status(200);
      res.send(newAddress);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.put(addressPath, async (req, res) => {
    req.params;
    try {
      const newAddress = new address(req.body);
      await newAddress.save();
      res.status(200);
      res.send(newAddress);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // delete

  return router;
};

module.exports = {
  addressInit,
};
