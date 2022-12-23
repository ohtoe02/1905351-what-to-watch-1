import { Link, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import { useAppDispatch, useAppSelector } from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import { setDataLoadedStatus } from '../../store/action';
import { useEffect } from 'react';
import { fetchFilmByID } from '../../store/api-actions';
import LoadingScreen from '../loading-page/loading-screen';

function ReviewPage(): JSX.Element {
  const filmId = Number(useParams().id);

  const film = useAppSelector((state) => state.film);
  const loadStatus = useAppSelector((state) => state.isDataLoaded);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setDataLoadedStatus(true));
    dispatch(fetchFilmByID(filmId.toString()));
    dispatch(setDataLoadedStatus(false));
  }, [filmId, dispatch]);

  if (loadStatus) {
    return(<LoadingScreen />);
  }

  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <div className='logo'>
            <Link to='/' className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </Link>
          </div>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${filmId}`} className='breadcrumbs__link'>
                  {film.name}
                </Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link
                  to={`/films/${filmId}/review`}
                  className='breadcrumbs__link'
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img
            src={film.posterImage}
            alt={`${film.name} poster`}
            width='218'
            height='327'
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default ReviewPage;
