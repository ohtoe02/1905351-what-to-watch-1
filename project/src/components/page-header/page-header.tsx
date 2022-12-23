import { Link } from 'react-router-dom';

function PageHeader(): JSX.Element {
  return (
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
              src='https://10.react.pages.academy/static/avatar/3.jpg'
              alt='User avatar'
              width='63'
              height='63'
            />
          </div>
        </li>
        <li className='user-block__item'>
          <Link to={'/login'} className='user-block__link'>
            Sign out
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default PageHeader;
