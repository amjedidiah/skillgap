import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    id: { type: String, required: true },
    name: String,
    email: {
      type: String,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      required: true,
      unique: true,
    },
    tag: {
      type: String,
      required: true,
      min: 4,
      max: 41,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    preferredGames: [String],
    pin: String,
  },
  {
    timestamps: true,
    _id: false,
  }
);

// Middleware
User.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  this.tag = this.tag.toLowerCase();

  this.country = this.country.toLowerCase();
  this.countryCode = this.countryCode.toUpperCase();
  this.preferredGames = this.preferredGames.map((item) => item.toLowerCase());

  next();
});

User.post("save", function (doc) {
  // TODO: Send welcome email
  console.info("User saved", doc);
});

export default mongoose.model("User", User);
