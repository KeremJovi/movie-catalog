import 'express-async-errors';
import Movie from '../model/Movie';
import AppError from '../../midlleware/error/AppError';

class DetailsMovieServices {
  async execute(movieId) {
    const findmovieId = await Movie.findById(movieId);

    if (!findmovieId) {
      throw new AppError('Movie not found!', 404);
    }

    return findmovieId;
  }
}

export default new DetailsMovieServices();
