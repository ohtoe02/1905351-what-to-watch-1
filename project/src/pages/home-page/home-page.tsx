import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import PageFooter from '../../components/page-footer/page-footer';
import FilmList from '../../components/film-list/film-list';

function HomePage(): JSX.Element {

  return (
    <>
      <PromoFilmCard />
      <div className='page-content'>
        <FilmList />

        <PageFooter />
      </div>
    </>
  );
}

export default HomePage;
