import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import PageFooter from '../../components/page-footer/page-footer';
import FilmList from '../../components/film-list/film-list';
import { HomePageProps } from '../../types/Props';
import CatalogGenres from '../../components/catalog-genres/catalog-genres';

function HomePage({
  homePageProps
}: {
  homePageProps: HomePageProps;
}): JSX.Element {
  return (
    <>
      <PromoFilmCard promoFilm={homePageProps.promoFilm} />

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>
          <CatalogGenres />

          <FilmList />

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default HomePage;
