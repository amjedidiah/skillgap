import { Router } from "express";
import { signupValidator } from "../validators/auth.validator";
import postAuthSignup from "../controllers/auth/signup";
import postAuthSignin from "../controllers/auth/signin";
import postAuthSignout from "../controllers/auth/signout";

const router = Router();

router.post("/signup", signupValidator, postAuthSignup);
router.post("/signin", postAuthSignin);
router.post("/signout", postAuthSignout);

export default router;
