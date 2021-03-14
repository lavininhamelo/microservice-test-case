import { Router } from "express";

const routes = new Router();

routes.get("/", function (req, res, next) {
  return res.json({
    msg: "Hello World!",
  });
});

export default routes;
