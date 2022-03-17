const mongoose = require("mongoose");

const PinSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required,
    },
    desc: {
      type: String,
      required,
      min: 3,
    },
    title: {
      type: String,
      required,
      min: 3,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
