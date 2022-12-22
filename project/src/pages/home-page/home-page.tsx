import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import PageFooter from '../../components/page-footer/page-footer';
import FilmList from '../../components/film-list/film-list';
import { HomePageProps } from '../../types/Props';

function HomePage({
  homePageProps
}: {
  homePageProps: HomePageProps;
}): JSX.Element {
  return (
    <>
      <PromoFilmCard promoFilm={homePageProps.promoFilm} />

      <div className='page-content'>
        <FilmList />

        <PageFooter />
      </div>
    </>
  );
}

export default HomePage;
