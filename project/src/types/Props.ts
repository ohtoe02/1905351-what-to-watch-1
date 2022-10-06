import Films from './Films';
import { Film } from './Film';

export type AppProps = {
	homePageProps: HomePageProps;
  films: Films
};

export type HomePageProps = {
	promoFilm: Film;
};
