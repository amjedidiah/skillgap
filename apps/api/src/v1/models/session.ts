import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Session = new Schema(
  {
    id: String,
    token: String,
  },
  {
    timestamps: true,
    _id: false,
  }
);

export default mongoose.model("Session", Session);
