import MovieCard from '../../components/movie-card/movie-card';
import { HomePageProps } from '../../types/Props';
import { Link } from 'react-router-dom';

function HomePage(props: HomePageProps): JSX.Element {
  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img
            src={props.promoMovie.images.bgImg}
            alt={props.promoMovie.title}
          />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <div className='logo'>
            <Link to='/' className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </Link>
          </div>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img
                  src='img/avatar.jpg'
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </div>
            </li>
            <li className='user-block__item'>
              <a href='/#' className='user-block__link'>
                Sign out
              </a>
            </li>
          </ul>
        </header>

        <div className='film-card__wrap'>
          <div className='film-card__info'>
            <div className='film-card__poster'>
              <img
                src={props.promoMovie.images.posterImg}
                alt={props.promoMovie.title}
                width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <h2 className='film-card__title'>{props.promoMovie.title}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>
                  {props.promoMovie.meta.genre}
                </span>
                <span className='film-card__year'>
                  {props.promoMovie.meta.year}
                </span>
              </p>

              <div className='film-card__buttons'>
                <button
                  className='btn btn--play film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className='btn btn--list film-card__button'
                  type='button'
                >
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          <div className='catalog__films-list'>
            <MovieCard
              title={'Fantastic Beasts: The Crimes of Grindelwald'}
              path={'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'}
            />

            <MovieCard
              title={'Bohemian Rhapsody'}
              path={'img/bohemian-rhapsody.jpg'}
            />

            <MovieCard title={'Macbeth'} path={'img/macbeth.jpg'} />

            <MovieCard title={'Aviator'} path={'img/aviator.jpg'} />

            <MovieCard
              title={'We need to talk about Kevin'}
              path={'img/we-need-to-talk-about-kevin.jpg'}
            />

            <MovieCard
              title={'What We Do in the Shadows'}
              path={'img/what-we-do-in-the-shadows.jpg'}
            />

            <MovieCard title={'Revenant'} path={'img/revenant.jpg'} />

            <MovieCard
              title={'Johnny English'}
              path={'img/johnny-english.jpg'}
            />

            <MovieCard
              title={'Shutter Island'}
              path={'img/shutter-island.jpg'}
            />

            <MovieCard title={'Pulp Fiction'} path={'img/pulp-fiction.jpg'} />

            <MovieCard
              title={'No Country for Old Men'}
              path={'img/no-country-for-old-men.jpg'}
            />

            <MovieCard title={'Snatch'} path={'img/snatch.jpg'} />

            <MovieCard
              title={'Moonrise Kingdom'}
              path={'img/moonrise-kingdom.jpg'}
            />

            <MovieCard
              title={'Seven Years in Tibet'}
              path={'img/seven-years-in-tibet.jpg'}
            />

            <MovieCard
              title={'Midnight Special'}
              path={'img/midnight-special.jpg'}
            />

            <MovieCard
              title={'War of the Worlds'}
              path={'img/war-of-the-worlds.jpg'}
            />

            <MovieCard
              title={'Dardjeeling Limited'}
              path={'img/dardjeeling-limited.jpg'}
            />

            <MovieCard title={'Orlando'} path={'img/orlando.jpg'} />

            <MovieCard title={'Mindhunter'} path={'img/mindhunter.jpg'} />

            <MovieCard
              title={'Midnight Special'}
              path={'img/midnight-special.jpg'}
            />
          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>
              Show more
            </button>
          </div>
        </section>

        <footer className='page-footer'>
          <div className='logo'>
            <a href='/#' className='logo__link logo__link--light'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
