import { DEFAULT_GENRE } from './constants';
import Films from '../types/Films';

export const filterFilmsByGenre = (films: Films, genre: string) => {
  if (genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
