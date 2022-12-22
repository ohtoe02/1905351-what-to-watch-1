import MovieCard from '../movie-card/movie-card';
import { Film } from '../../types/Film';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import CatalogGenres from '../catalog-genres/catalog-genres';

function FilmList(): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);
  const films = useAppSelector((state) => state.filteredFilms);
  const cardCount = useAppSelector((state) => state.cardCount);

  const changeActiveCard = (filmId: number) => {
    if (activeCard !== filmId) {
      setActiveCard(filmId);
    }
  };

  return (
    <section className="catalog">
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <CatalogGenres />

      <div className='catalog__films-list'>
        {films.slice(0, cardCount).map((film: Film) => (
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
      <ShowMoreButton isPossibleToLoadMore={cardCount !== films.length} />
    </section>
  );
}

export default FilmList;
