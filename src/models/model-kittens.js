const createKittenModel = (mongoose) => {
  const kittenSchema = new mongoose.Schema({
    name: String,
  });

  return mongoose.model("Kitten", kittenSchema);
};

module.exports = {
  createKittenModel,
};
