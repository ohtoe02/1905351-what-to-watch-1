import MovieCard from '../movie-card/movie-card';
import { Film } from '../../types/Film';
import Films from '../../types/Films';
import { useState } from 'react';

function FilmsList({
  films,
  amountToShow
}: {
  films: Films;
  amountToShow: number;
}): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);

  const changeActiveCard = (filmId: number) => {
    if (activeCard !== filmId) {
      setActiveCard(filmId);
    }
  };

  return (
    <div className='catalog__films-list'>
      {films.slice(0, amountToShow).map((film: Film) => (
        <MovieCard
          key={film.id}
          id={film.id}
          title={film.name}
          poster={film.posterImage}
          hoverHandler={() => changeActiveCard(film.id)}
          outHandler={() => changeActiveCard(-1)}
        />
      ))}
    </div>
  );
}

export default FilmsList;
