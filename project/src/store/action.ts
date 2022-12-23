import { createAction } from '@reduxjs/toolkit';
import Films from '../types/Films';
import { AppRoute, AuthorizationStatus } from '../utils/constants';

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
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
