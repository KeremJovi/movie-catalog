import 'express-async-errors';
import Movie from '../model/Movie';
import CreateMovieService from '../services/CreateMovieService';
import PageSearchMovieServices from '../services/PageSearchMovieServices';

class MovieController {
  async index(req, res) {
    const info = await CreateMovieService.execute();

    return res.json(info);
  }

  async show(req, res) {
    const { page = 1, limit = 10 } = req.query;
    const paginationMovie = await PageSearchMovieServices.execute(page, limit);
    return res.json(paginationMovie);
  }
}

export default new MovieController();
