import { Router } from "express";
import { router as user } from "./user";

const router = Router();

router.use(user);

export default router;