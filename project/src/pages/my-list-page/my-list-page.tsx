import PageHeader from '../../components/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import FilmList from '../../components/film-list/film-list';

function MyListPage(): JSX.Element {
  return (
    <div className='user-page'>
      <PageHeader />

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <FilmList />
      </section>

      <PageFooter />
    </div>
  );
}

export default MyListPage;
