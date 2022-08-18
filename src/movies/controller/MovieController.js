import CreateMovieService from '../services/CreateMovieService';

class MovieController {
  async store(req, res) {
    const infoMovie = req.body;

    const createdMovie = await CreateMovieService.execute(infoMovie);

    return res.json(createdMovie);
  }
}

export default new MovieController();
