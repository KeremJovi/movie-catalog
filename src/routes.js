import { Router } from 'express';
import MovieController from './movies/controller/MovieController';

const routes = new Router();
routes.get('/movie', MovieController.index);
routes.get('/movie/find', MovieController.show);

export default routes;
