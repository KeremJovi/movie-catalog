import 'express-async-errors';
import Movie from '../model/Movie';
import api from '../../api';
import AppError from '../../midlleware/error/AppError';

class CreateMovieService {
  async execute() {
    try {
      const { data } = await api.get('films');
      await Movie.deleteMany();
      const createdMovie = await Movie.create(data);

      return createdMovie;
    } catch (error) {
      throw new AppError('Internal Error', 500);
    }
  }
}

export default new CreateMovieService();
