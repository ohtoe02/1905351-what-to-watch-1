import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadComments,
  loadFilm,
  loadFilms,
  loadPromo,
  loadSimilar,
  redirectToRoute,
  requireAuthorization,
  setAvatar,
  setDataLoadedStatus,
  setError
} from './action';
import { store } from './index';
import {
  APIRoutes,
  AppRoute,
  AuthorizationStatus,
  SHOW_ERROR_TIME
} from '../utils/constants';
import { AppDispatch, State } from '../types/State';
import { AuthData } from '../types/AuthData';
import { AxiosInstance } from 'axios';
import { UserData } from '../types/UserData';
import Films from '../types/Films';
import { dropToken, saveToken } from '../services/token';
import { Film } from '../types/Film';
import { Comments } from '../types/Comments';
import { UserComment } from '../types/UserComment';

export const clearErrorAction = createAsyncThunk('app/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), SHOW_ERROR_TIME);
});

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>('/films');
  dispatch(setDataLoadedStatus(true));
  dispatch(loadFilms(data));
  dispatch(setDataLoadedStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get('/login');
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token, avatarUrl }
  } = await api.post<UserData>('/login', { email, password });
  saveToken(token);
  dispatch(setAvatar(avatarUrl));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Home));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete('/logout');
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(setAvatar(null));
  dispatch(redirectToRoute(AppRoute.Home));
});

export const fetchFilmByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmById', async (filmId: string, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(`${APIRoutes.Films}/${filmId}`);
  dispatch(loadFilm(data));
});

export const fetchPromoFilm = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('main/fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>('promo');
  dispatch(loadPromo(data));
});

export const fetchCommentsByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/fetchCommentsById',
  async (filmId: string, { dispatch, extra: api }) => {
    const { data } = await api.get<Comments>(`${APIRoutes.Comments}/${filmId}`);
    dispatch(loadComments(data));
  }
);

export const fetchSimilarByID = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSimilarById', async (filmId: string, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(
    `${APIRoutes.Films}/${filmId}${APIRoutes.Similar}`
  );
  dispatch(loadSimilar(data));
});

export const postComment = createAsyncThunk<
  void,
  UserComment,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postCommentById',
  async ({ comment, rating, filmId }, { dispatch, extra: api }) => {
    dispatch(setDataLoadedStatus(true));
    await api.post<UserComment>(`${APIRoutes.Comments}/${filmId}`, {
      comment,
      rating
    });
    dispatch(redirectToRoute(`${APIRoutes.Films}/${filmId}`));
    dispatch(setDataLoadedStatus(false));
  }
);
