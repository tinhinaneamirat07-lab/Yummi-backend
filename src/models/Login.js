import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Login", loginSchema);
