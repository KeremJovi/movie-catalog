import { Router } from 'express';
import MovieController from './movies/controller/MovieController';

const routes = new Router();

routes.post('/', MovieController.store);

export default routes;
