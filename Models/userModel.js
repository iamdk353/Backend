import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    minLength: [5, "minimum length is 5 please increrase length of your name"],
    maxLength: [15, "maximum length is 15 please decrease length of your name"],
    required: [true, "user name is required"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: [
      8,
      "minimum length is 8 please increrase length of your password",
    ],
    required: [true, "password is required"],
  },
});
const user = mongoose.model("USER", userSchema);
export default user;
