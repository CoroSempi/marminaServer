import mongoose from "mongoose";

const prizeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});

const Prize = mongoose.model("Prize", prizeSchema);
export default Prize;
