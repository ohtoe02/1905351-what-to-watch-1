import films from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeFilmTab,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  resetHomeScreen
} from './action';
import { filterFilmsByGenre } from '../utils/filter-films-by-genre';

const initState = {
  currentGenre: '',
  films,
  filteredFilms: films,
  cardCount: films.length < 8 ? films.length : 8,

  filmPageTab: 'Overview'
};

export const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(resetHomeScreen, (state) => {
      state.currentGenre = 'Drama';
      state.filteredFilms = films;
      state.cardCount = films.length < 8 ? films.length : 8;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = filterFilmsByGenre(
        state.films,
        action.payload.currentGenre
      );

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < 8 ? filteredFilms.length : 8;
    })
    .addCase(increaseCardCount, (state) => {
      state.cardCount =
        state.cardCount + 8 < state.filteredFilms.length
          ? state.cardCount + 8
          : state.filteredFilms.length;
    })
    .addCase(resetCardCount, (state) => {
      state.cardCount =
        state.filteredFilms.length < 8 ? state.filteredFilms.length : 8;
    })
    .addCase(resetFilmScreen, (state) => {
      state.filmPageTab = 'Overview';
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    });
});
