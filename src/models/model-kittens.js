const createKittenModel = (mongoose) => {
  const kittenSchema = new mongoose.Schema({
    name: String,
  });

  kittenSchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  return mongoose.model("Kitten", kittenSchema);
};

module.exports = {
  createKittenModel,
};
