import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadFilms,
  requireAuthorization,
  setDataLoadedStatus,
  setError
} from './action';
import { store } from './index';
import { AuthorizationStatus, SHOW_ERROR_TIME } from '../utils/constants';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/AuthData';
import { AxiosInstance } from 'axios';
import { UserData } from '../types/UserData';
import Films from '../types/Films';
import { dropToken, saveToken } from '../services/token';

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
    data: { token }
  } = await api.post<UserData>('/login', { email, password });
  saveToken(token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
});
