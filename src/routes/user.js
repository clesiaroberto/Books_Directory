import { Router } from "express";
import {
    register,
} from "../controller/user";

export const router = Router();

router.post("/users", register);