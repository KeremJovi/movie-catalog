import Movie from '../model/Movie';

class CreateMovieService {
  async execute(infoMovie) {
    const createdMovie = await Movie.create(infoMovie);

    return createdMovie;
  }
}

export default new CreateMovieService();
