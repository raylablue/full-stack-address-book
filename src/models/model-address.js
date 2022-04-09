const createAddressModel = (mongoose) => {
  const addressSchema = new mongoose.Schema({
    name: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    phone: String,
  });

  return mongoose.model("Address", addressSchema);
};

module.exports = {
  createAddressModel,
};
