import { Router } from "express";
import { register, login, user } from "../Controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {loginSchema, signupSchema} from "../Validator/auth.validator.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = Router();

router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(validate(loginSchema), login);
router.route("/user").get(authMiddleware, user)

export {router};
