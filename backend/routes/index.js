import express from "express";
import userRouter from "./user.js";
import accountRouter from "./accounts.js";

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/account", accountRouter);

export default mainRouter;