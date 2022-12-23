import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { HomePageProps } from './types/Props';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';
import promoMovie from './mocks/promo-movie';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const homePageProps: HomePageProps = {
  promoFilm: promoMovie
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App homePageProps={homePageProps} />
    </Provider>
  </React.StrictMode>
);
