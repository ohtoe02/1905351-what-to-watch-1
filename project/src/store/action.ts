import { createAction } from '@reduxjs/toolkit';
import Films from '../types/Films';
import { AuthorizationStatus } from '../utils/constants';
import { Comments } from '../types/Comments';
import { Film } from '../types/Film';

export const resetHomeScreen = createAction('main/resetState');
export const resetFilmScreen = createAction('film/resetState');
export const resetCardCount = createAction('main/resetCardCount');
export const increaseCardCount = createAction('main/increaseCardCount');
export const changeGenre = createAction<{ currentGenre: string }>(
  'main/changeGenre'
);
export const changeFilmTab = createAction<{ currentTab: string }>(
  'film/changeFilmTab'
);
export const loadFilms = createAction<Films>('data/loadFilms');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setDataLoadedStatus = createAction<boolean>(
  'data/setDataLoadedStatus'
);
export const setError = createAction<string | null>('app/setError');
export const setAvatar = createAction<string | null>('user/avatar');
export const redirectToRoute = createAction<string>('app/redirectToRoute');
export const loadFilm = createAction<Film>('data/loadFilmById');
export const loadPromo = createAction<Film>('main/loadPromoFilm');
export const loadComments = createAction<Comments>('data/loadCommentsById');
export const loadSimilar = createAction<Films>('data/loadSimilarById');
