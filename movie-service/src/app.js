import "dotenv/config";
import express from "express";
import routes from "./routes";
import db from "./config/database/index";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    db();
    console.log("Iniciando");
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
