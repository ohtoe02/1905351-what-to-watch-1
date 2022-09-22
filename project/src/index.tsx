import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {HomePageProps} from './types/Props';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const homePageProps: HomePageProps = {
  promoMovie: {
    title: 'The Grand Budapest Hotel',
    images: {
      posterImg: 'img/the-grand-budapest-hotel-poster.jpg',
      bgImg: 'img/bg-the-grand-budapest-hotel.jpg'
    },
    meta: {
      genre: 'Drama',
      year: 2014
    }
  }
};

root.render(
  <React.StrictMode>
    <App homePageProps={homePageProps} />
  </React.StrictMode>,
);
