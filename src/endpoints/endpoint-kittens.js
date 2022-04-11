const kittenPath = "/api/kittens";

const getKittens = (app, Kitten) => {
  app.get(kittenPath, async (_, res) => {
    const kittens = await Kitten.find();

    res.json({ kittens });
  });
};

const postKitten = (app, Kitten) => {
  app.post(kittenPath, async (req, res, next) => {
    try {
      const newKitten = new Kitten(req.body);
      await newKitten.save();
      res.status(200);
      res.send(newKitten);
    } catch (err) {
      res.status(500).json({ error: err.message });
      next(err);
    }
  });
};

module.exports = {
  getKittens,
  postKitten,
};
