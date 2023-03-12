const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Register a new user
// POST /api/users
// public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }

  // Check if user exists

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  // Hash Password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});

// Authenticate  a new user
// POST /api/users/login
// public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "logged in" });
});

// Get user data
// GET /api/users/me
// public

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "user data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
