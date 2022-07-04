import { Router } from "express";
import {
    checkCon,
} from "../controller/user";

export const router = Router();

router.get("/regists", checkCon);