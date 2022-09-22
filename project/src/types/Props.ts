import {PromoMovie} from './PromoMovie';

export type AppProps = {
  homePageProps: HomePageProps;
}

export type HomePageProps = {
  promoMovie: PromoMovie;
}

export type MovieCardProps = {
  title: string;
  path: string;
}
