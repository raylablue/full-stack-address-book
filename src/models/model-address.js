const createAddressModel = (mongoose) => {
  const schema = new mongoose.Schema({
    name: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    phone: String,
  });

  schema.virtual("id").get(function () {
    return this._id.toHexString();
  });

  schema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.__v;
    },
  });

  return mongoose.model("Address", schema);
};

module.exports = {
  createAddressModel,
};
