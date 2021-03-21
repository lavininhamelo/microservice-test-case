import 'dotenv/config';
import express from 'express';
import routes from './routes';
import db from './config/database/index';
import RabbitMQ from './config/rabbitmq';

class App {
  constructor() {
    this.server = express();
    this.rabbit = new RabbitMQ();

    this.middlewares();
    this.routes();
    db();
  }

  async middlewares() {
    this.server.use(express.json());
    await this.rabbit.connect();
    await this.rabbit.sentToQueue('fila', 'hello', 'Hello!');
    await this.rabbit.consume('fila', 'hello');
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App();
