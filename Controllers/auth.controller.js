import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;
    const userExisted = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExisted) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash the password
    const saltRounds = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, saltRounds);
    const userCreated = await User.create({
      userName,
      email,
      phone,
      password: hash_password,
    });
    return res
      .status(201)
      .json({
        message: "Registration Successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (err) {
    // res.status(500).send("internal server error" + error);
    next(err);
  }
};

// Login logic
const login = async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    const userExisted = await User.findOne({ email });
    if (!userExisted) {
      return res.status(404).json({ message: "Invalid Credentials" });
    }
    // const user = await bcrypt.compare(password, userExisted.password);
    const user= await userExisted.comparePassword(password);
    if (user) {
      return res
        .status(200)
        .json({
          message: "Login Successful",
          token: await userExisted.generateToken(),
          userId: userExisted._id.toString(),
        });
    } else {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).send("internal server error" + error);
  }
};

const user=async (req, res) => {
  try {
    const userData=req.user;
    return res.status(200).json({userData});
  } catch (error) {
    console.log(`error from the user route ${error}`)
  }
}
export { register, login,user };
