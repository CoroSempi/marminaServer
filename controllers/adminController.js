import Prize from "../models/Prize.js";
import User from "../models/User.js";

// addPrize =============================
export const addPrize = async (req, res) => {
  try {
    const { title, quantity, pic } = req.body;
    const prize = new Prize({
      title,
      quantity,
      pic,
    });
    await prize.save();
    res.status(200).json({ message: "Prize added successfully", prize: prize });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// deletePrize =============================
export const deletePrize = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPrize = await Prize.findByIdAndDelete(id);
    if (!deletedPrize) {
      return res.status(404).json({ message: "Prize not found" });
    }
    res.status(200).json({ message: "Prize deleted successfully" });
    console.log(id);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// updatePrize =============================
export const updatePrize = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, quantity, pic } = req.body;
    const updatedPrize = await Prize.findByIdAndUpdate(
      id,
      { title, quantity, pic },
      { new: true }
    );
    if (!updatedPrize) {
      return res.status(404).json({ message: "Prize not found" });
    }
    res
      .status(200)
      .json({ message: "Prize updated successfully", prize: updatedPrize });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// getPrizes =============================
export const getPrizes = async (req, res) => {
  try {
    const prizes = await Prize.find();
    res.status(200).json(prizes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// getAllUsers =============================
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// deleteUser =============================
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
    console.log(id);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
