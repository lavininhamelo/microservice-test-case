import { Router } from "express";

const routes = new Router();

routes.get("/", function (req, res, next) {
  return res.json({
    msg: "Hello World!",
  });
});

//Movie
routes.get("/movies", MovieController.index);
routes.get("/movie/:id", MovieController.show);
routes.post("/movie", MovieController.create);
routes.delete("/movie/:id", MovieController.delete);

//Genres
routes.get("/genres", GenreController.index);
routes.get("/genre", GenreController.show);
routes.post("/genre", GenreController.create);
routes.delete("/genre/:id", GenreController.delete);
export default routes;
