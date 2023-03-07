import express from "express";
import chefRouter from "./chefs.routes";
import dishRouter from "./dishes.routes";

const router = express.Router();

router.use("/api/chefs/", chefRouter);
router.use("/api/dishes/", dishRouter);

export default router;
