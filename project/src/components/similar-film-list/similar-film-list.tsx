import { Film } from '../../types/Film';
import MovieCard from '../movie-card/movie-card';
import { useState } from 'react';
import Films from '../../types/Films';

function SimilarFilmList({
  similarFilms
}: {
  similarFilms: Films;
}): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);

  const changeActiveCard = (filmId: number) => {
    if (activeCard !== filmId) {
      setActiveCard(filmId);
    }
  };

  return (
    <div className='catalog__films-list'>
      {similarFilms.map((film: Film) => (
        <MovieCard
          key={film.id}
          id={film.id}
          title={film.name}
          poster={film.posterImage}
          videoPreview={film.previewVideoLink}
          isMouseOver={activeCard === film.id}
          mouseOverHandler={() => changeActiveCard(film.id)}
          mouseOutHandler={() => changeActiveCard(-1)}
        />
      ))}
    </div>
  );
}

export default SimilarFilmList;
