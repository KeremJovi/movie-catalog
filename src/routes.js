import { Router } from 'express';
import MovieController from './movies/controller/MovieController';

const routes = new Router();

routes.post('/', MovieController.store);
routes.get('/find/', MovieController.index);

export default routes;
