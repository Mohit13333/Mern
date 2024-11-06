import { Router } from "express";
import { home, register, login } from "../Controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import signupSchema from "../Validator/auth.validator.js";
const router = Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

export {router};
