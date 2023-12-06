import express from "express";
import listEndpoints from "express-list-endpoints";
import { UserModel } from "../models/User";

const router = express.Router();

// Route to get available endpoints
router.get("/", (req, res) => {
  const endpoints = listEndpoints(router);
  res.json({ endpoints });
});

router.get("/hello", (req, res) => {
  res.json("Hello, this is working");
});

router.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const user = new UserModel({
      email,
      username,
      password: bcrypt.hashSync(password),
    });
    UserModel.save();
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
