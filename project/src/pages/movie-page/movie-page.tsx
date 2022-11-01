import { Link, useParams } from 'react-router-dom';
import Films from '../../types/Films';
import NotFoundPage from '../not-found-page/not-found-page';
import PageHeader from '../../components/page-header/page-header';
import FilmList from '../../components/film-list/film-list';
import PageFooter from '../../components/page-footer/page-footer';
import ratingConverter from '../../utils/rating-converter';

function MoviePage({ films }: { films: Films }): JSX.Element {
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);

  const remainingFilms = films.slice();
  remainingFilms.splice(id - 1, 1);

  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <PageHeader />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film.genre}</span>
                <span className='film-card__year'>{film.released}</span>
              </p>

              <div className='film-card__buttons'>
                <Link
                  to={`/player/${id}`}
                  className='btn btn--play film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link
                  className='btn btn--list film-card__button'
                  type='button'
                  to={'/mylist'}
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </Link>
                <Link
                  to={`/films/${id}/review`}
                  className='btn film-card__button'
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img
                src={film.posterImage}
                alt={`${film.name} poster`}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className='film-nav__item film-nav__item--active'>
                    <a href='/#' className='film-nav__link'>
                      Overview
                    </a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='/#' className='film-nav__link'>
                      Details
                    </a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='/#' className='film-nav__link'>
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>

              <div className='film-rating'>
                <div className='film-rating__score'>{film.rating}</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>
                    {ratingConverter(film.rating)}
                  </span>
                  <span className='film-rating__count'>{`${film.scoresCount} ratings`}</span>
                </p>
              </div>

              <div className='film-card__text'>
                <p>{film.description}</p>

                <p className='film-card__director'>
                  <strong>Director: {film.director}</strong>
                </p>

                <p className='film-card__starring'>
                  <strong>Starring: {film.starring.join(', ')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <FilmList films={remainingFilms} amountToShow={4} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MoviePage;
