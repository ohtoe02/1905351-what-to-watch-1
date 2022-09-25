import MovieCard from '../../components/movie-card/movie-card';
import { Link } from 'react-router-dom';

function MyListPage(): JSX.Element {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <Link to='/' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </Link>
        </div>

        <h1 className='page-title user-page__title'>
          My list <span className='user-page__film-count'>9</span>
        </h1>
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

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

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

          <MovieCard title={'Johnny English'} path={'img/johnny-english.jpg'} />

          <MovieCard title={'Shutter Island'} path={'img/shutter-island.jpg'} />
        </div>
      </section>

      <footer className='page-footer'>
        <div className='logo'>
          <a href='main.html' className='logo__link logo__link--light'>
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
  );
}

export default MyListPage;
