import { Router } from "express";
import getUserUniqueness from "../controllers/user/uniqueness";

const router = Router();

router.get("/uniqueness", getUserUniqueness);

export default router;
