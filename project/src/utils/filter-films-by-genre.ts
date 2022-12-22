import { Film } from '../types/Film';
import { DEFAULT_GENRE } from './constants';

export const filterFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
