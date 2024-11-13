import { Router } from "express";
import service from "../Controllers/service.controller.js";

const router=Router();

router.route('/services').get(service)

export {router}; 