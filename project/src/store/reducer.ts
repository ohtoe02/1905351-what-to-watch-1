import films from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilmTab,
  changeGenre,
  filterByGenre,
  resetFilmScreen,
  resetHomeScreen
} from './action';
import { filterFilmsByGenre } from '../utils/filter-films-by-genre';

const initState = {
  currentGenre: '',
  films,
  shownFilms: films,
  shownCount: films.length < 8 ? films.length : 8,

  filmPageTab: 'Overview'
};

export const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(resetHomeScreen, (state) => {
      state.currentGenre = 'Drama';
      state.shownFilms = films;
      state.shownCount = films.length < 8 ? films.length : 8;
    })
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(filterByGenre, (state) => {
      state.shownFilms = filterFilmsByGenre(state.films, state.currentGenre);
    })
    .addCase(resetFilmScreen, (state) => {
      state.filmPageTab = 'Overview';
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    });
});
