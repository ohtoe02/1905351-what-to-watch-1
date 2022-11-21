import { MoviePageTabs } from '../../utils/constants';

type MovieTabsProps = {
  currentTab: string;
  updateTab: (a: string) => void;
};

function MovieTabs({ currentTab, updateTab }: MovieTabsProps): JSX.Element {
  return (
    <nav className='film-nav film-card__nav'>
      <ul className='film-nav__list'>
        {MoviePageTabs.map((tab) => (
          <li
            key={tab}
            className={`film-nav__item ${
              currentTab === tab ? 'film-nav__item--active' : ''
            }`}
          >
            <a
              href='/#'
              className='film-nav__link'
              onClick={(evt) => {
                evt.preventDefault();
                updateTab(tab);
              }}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MovieTabs;
