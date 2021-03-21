import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import TicketController from '../controllers/TicketController';

const routes = new Router();

routes.get('/', function (req, res, next) {
  return res.json({
    msg: 'Hello World! store',
  });
});
routes.get('/orders', OrderController.index);
routes.get('/order/:id', OrderController.show);
routes.post('/order', OrderController.create);
routes.delete('/order/:id', OrderController.delete);

routes.get('/tickets', TicketController.index);
routes.get('/ticket/:id', TicketController.show);
routes.post('/ticket', TicketController.create);
routes.delete('/tickets/:id', TicketController.delete);

export default routes;
