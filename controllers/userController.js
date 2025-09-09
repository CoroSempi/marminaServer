import Prize from "../models/Prize.js";
import User from "../models/User.js";

// form =============================
export const form = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const data = { ...req.body };
    if (data.gender === "ذكر") {
      data.gender = "male";
    } else {
      data.gender = "female";
    }
    const user = new User({ ...data });
    await user.save();
    res.status(200).json({ message: "Data added successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// spinTheWheel =============================
export const spinTheWheel = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const prizes = await Prize.find({ quantity: { $gt: 0 } });
    if (prizes.length === 0) {
      return res.status(200).json({ message: "No prizes available" });
    }

    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    randomPrize.quantity -= 1;
    await randomPrize.save();
    user.prizeId = randomPrize._id;
    user.prizeTitle = randomPrize.title;
    await user.save();
    res.status(200).json({ prize: randomPrize });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
