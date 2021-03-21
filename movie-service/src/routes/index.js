import { Router } from "express";
import MovieController from "../controllers/MovieController";
import GenderController from "../controllers/GenderController";
import mongo from "../config/database";
const routes = new Router();

routes.get("/", function (req, res, next) {
  return res.json({
    msg: "Hello World! Movie",
    connectedDB: mongo.readyState,
  });
});

//Movie
routes.get("/movies", MovieController.index);
routes.get("/movie/:id", MovieController.show);
routes.post("/movie", MovieController.create);
routes.delete("/movie/:id", MovieController.delete);

//Genders
routes.get("/genders", GenderController.index);
routes.get("/gender/:id", GenderController.show);
routes.post("/gender", GenderController.create);
routes.delete("/gender/:id", GenderController.delete);

export default routes;
