import { Router } from "express";

import { authorsRoutes } from "./authors.routes";
import { gamesRoutes } from "./games.routes";
import { tagsRoutes } from "./tags.routes";

const router = Router();

router.use("/tags", tagsRoutes);
router.use("/authors", authorsRoutes);
router.use("/Games", gamesRoutes)

export { router }