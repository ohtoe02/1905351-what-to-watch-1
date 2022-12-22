import { Film } from '../types/Film';
import { DEFAULT_GENRE } from './constants';

export const getAllGenres = (films: Film[]) => (
  [...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]
);
