import CreateMovieService from '../services/CreateMovieService';
import IndexMovieServices from '../services/IndexMovieServices';

class MovieController {
  async store(req, res) {
    const infoMovie = req.body;

    const createdMovie = await CreateMovieService.execute(infoMovie);

    return res.json(createdMovie);
  }

  async index(req, res) {
    const infoMovie = req.params;

    const findMovie = await IndexMovieServices.execute(infoMovie);

    return res.json(findMovie);
  }
}

export default new MovieController();
