import 'express-async-errors';
import CreateMovieService from '../services/CreateMovieService';
import DetailsMovieServices from '../services/DetailsMovieServices';
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

  async detailsMovie(req, res) {
    const { movieId } = req.params;

    const detailsMovie = await DetailsMovieServices.execute(movieId);

    return res.json(detailsMovie);
  }
}

export default new MovieController();
