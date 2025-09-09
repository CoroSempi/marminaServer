import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  academicYear: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  confessionFather: {
    type: String,
    required: true,
  },
  housing: {
    type: Boolean,
    required: true,
  },
  notes: {
    type: String,
    required: false,
    default: "No Notes",
  },
  prizeTitle: {
    type: String,
    required: true,
    default: "No Prize",
  },
  prizeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prize",
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Users", userSchema);
export default User;
