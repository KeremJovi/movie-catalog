import Movie from '../model/Movie';
import 'express-async-errors';
import AppError from '../../midlleware/error/AppError';

class PageSearchMovieServices {
  async execute(page, limit) {
    console.log(page, limit);
    try {
      console.log('dentro do try', page, limit);
      const posts = await Movie.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

      const count = await Movie.countDocuments();

      const result = {
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      };

      return result;
    } catch (error) {
      throw new AppError('Internal Error', 500);
    }
  }
}

export default new PageSearchMovieServices();
