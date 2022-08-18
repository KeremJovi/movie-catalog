import Movie from '../model/Movie';

class IndexMovieServices {
  async execute(infoMovie) {
    const findMovie = await Movie.findOne(infoMovie);

    return findMovie;
  }
}

export default new IndexMovieServices();
