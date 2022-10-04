import PageHeader from '../../components/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import FilmsList from '../../components/films-list/films-list';
import Films from '../../types/Films';

function MyListPage({ films }: { films: Films }): JSX.Element {
  return (
    <div className='user-page'>
      <PageHeader />

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <FilmsList films={films} amountToShow={8} />
      </section>

      <PageFooter />
    </div>
  );
}

export default MyListPage;
