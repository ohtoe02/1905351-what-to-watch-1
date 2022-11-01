import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import PageFooter from '../../components/page-footer/page-footer';
import FilmList from '../../components/film-list/film-list';
import { HomePageProps } from '../../types/Props';
import Films from '../../types/Films';

function HomePage({
  homePageProps,
  films
}: {
  homePageProps: HomePageProps;
  films: Films;
}): JSX.Element {
  return (
    <>
      <PromoFilmCard promoFilm={homePageProps.promoFilm} />

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='/#' className='catalog__genres-link'>
                All genres
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Comedies
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Crime
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Documentary
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Dramas
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Horror
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Kids & Family
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Romance
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Sci-Fi
              </a>
            </li>
            <li className='catalog__genres-item'>
              <a href='/#' className='catalog__genres-link'>
                Thrillers
              </a>
            </li>
          </ul>

          <FilmList films={films} amountToShow={8} />

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
