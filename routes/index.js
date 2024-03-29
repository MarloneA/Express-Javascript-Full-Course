import { Router } from "express";
import taskRouter from "./tasks/index.js";
import usersRouter from "./users/index.js";
import authRouter from "./auth/index.js";
import logger from "../middleware/logger.js";

const router = Router();

router.use(logger);
router.use(usersRouter);
router.use(authRouter);
router.use(taskRouter);

export default router;
