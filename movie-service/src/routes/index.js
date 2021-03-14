import { Router } from 'express'
import MovieController from '../controllers/MovieController'
import GenderController from '../controllers/GenderController'

const routes = new Router()

routes.get('/', function (req, res, next) {
  return res.json({
    msg: 'Hello World!'
  })
})

//Movie
routes.get('/movies', MovieController.index)
routes.get('/movie/:id', MovieController.show)
routes.post('/movie', MovieController.create)
routes.delete('/movie/:id', MovieController.delete)

//Genders
routes.get('/genres', GenderController.index)
routes.get('/genre', GenderController.show)
routes.post('/genre', GenderController.create)
routes.delete('/genre/:id', GenderController.delete)
export default routes
