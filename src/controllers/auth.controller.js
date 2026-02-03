import User from "../models/User.js";  
import bcrypt from "bcryptjs";  
import jwt from "jsonwebtoken";  

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ======================
// REGISTER
// ======================
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({
        message: "Email already in use",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
      name,
      email,
      password: hashed,
    });
    await user.save();

    // Generate token
    const token = createToken(user._id);

    return res.status(201).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Registration failed",
      error: err.message,
    });
  }
};

// ======================
// LOGIN
// ======================
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = createToken(user._id);

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Login failed",
      error: err.message,
    });
  }
};
