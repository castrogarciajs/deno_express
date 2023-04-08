import { Router } from "npm:express";
import { __init__ } from "../controllers/controllers.ts";

const router = Router();

router.get("/", __init__);

export default router;
