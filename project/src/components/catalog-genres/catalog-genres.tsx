import { changeGenre } from '../../store/action';
import { getAllGenres } from '../../utils/get-all-film-genres';
import { DEFAULT_GENRE } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useState } from 'react';

function CatalogGenres(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(DEFAULT_GENRE);

  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.films);
  const genres = getAllGenres(films);

  const handleChangeGenreClick = (
    evt: React.MouseEvent<HTMLAnchorElement>,
    genre: string
  ) => {
    evt.preventDefault();
    dispatch(changeGenre({ currentGenre: genre }));
    setCurrentGenre(genre);
  };

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${
            currentGenre === genre && 'catalog__genres-item--active'
          }`}
          key={genre}
        >
          <a
            href='/'
            className='catalog__genres-link'
            onClick={(evt) => handleChangeGenreClick(evt, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CatalogGenres;
