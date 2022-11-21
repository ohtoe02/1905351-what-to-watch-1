import { Link, useParams } from 'react-router-dom';
import Films from '../../types/Films';
import NotFoundPage from '../not-found-page/not-found-page';
import PageHeader from '../../components/page-header/page-header';
import FilmList from '../../components/film-list/film-list';
import PageFooter from '../../components/page-footer/page-footer';
import MovieTabs from '../../components/movie-tabs/movie-tabs';
import { useState } from 'react';
import { MoviePageTabs } from '../../utils/constants';
import MovieInformation from '../../components/movie-information/movie-information';

function MoviePage({ films }: { films: Films }): JSX.Element {
  const [currentTab, setCurrentTab] = useState(MoviePageTabs[0]);
  const id = Number(useParams().id);
  const film = films.find((currentFilm) => currentFilm.id === id);

  if (!film) {
    return <NotFoundPage />;
  }

  const similarFilms = films.filter(
    (item) => item.genre === film.genre && item.id !== film.id
  );

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
              <MovieTabs currentTab={currentTab} updateTab={setCurrentTab} />

              <MovieInformation currentTab={currentTab} film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <FilmList films={similarFilms} amountToShow={4} />
        </section>

        <PageFooter />
      </div>
    </>
  );
}

export default MoviePage;
