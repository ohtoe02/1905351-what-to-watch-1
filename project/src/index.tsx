import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { HomePageProps } from './types/Props';
import films from './mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const homePageProps: HomePageProps = {
  promoFilm: films[8]
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App homePageProps={homePageProps} films={films} />
    </Provider>
  </React.StrictMode>
);
