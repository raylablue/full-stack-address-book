const addressPath = "/api/addresses";

const getAddresses = (app, Address) => {
  app.get(addressPath, async (_, res) => {
    const addresses = await Address.find();

    res.json({
      addresses,
    });
  });
};

const postAddress = (app, Address) => {
  app.post(addressPath, async (req, res, next) => {
    try {
      const newAddress = new Address(req.body);
      await newAddress.save();
      res.status(200);
      res.send(newAddress);
    } catch (err) {
      res.status(500).json({ error: err.message });
      next(err);
    }
  });
};

module.exports = {
  getAddresses,
  postAddress,
};
