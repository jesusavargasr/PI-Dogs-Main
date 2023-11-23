const { Router } = require("express");
const dogRouter = require("./dogRouter");
const temperamentRouter = require("./temperamentRouter");

const mainRouter = Router();

mainRouter.use("/dog", dogRouter);
mainRouter.use("/temperament", temperamentRouter);

module.exports = mainRouter;
