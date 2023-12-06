import express from "express";
import listEndpoints from "express-list-endpoints";
import { UserModel } from "../models/User";
import bcrypt from "bcrypt";

const router = express.Router();

// Route to get available endpoints
router.get("/", (req, res) => {
  const endpoints = listEndpoints(router);
  res.json({ endpoints });
});

router.post("/users", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      // if so, set http status to a 400code
      res.status(400);
      // and throw new error with some info
      throw new Error("Please add all fields");
    }
    const user = new UserModel({
      email,
      username,
      password: bcrypt.hashSync(password, 10),
    });

    await user.save();
    res.status(201).json({ id: user._id, accessToken: user.accessToken });
  } catch (err) {
    res.status(400).json({
      message: "Could not create user",
      errors: err.errors,
    });
  }
});

// Inte klart
router.post("/authentication", async (req, res) => {});

export default router;
