import ratingConverter from '../../utils/rating-converter';
import { Film } from '../../types/Film';

function MovieOverview({ currentFilm }: { currentFilm: Film }): JSX.Element {
  return (
    <>
      <div className='film-rating'>
        <div className='film-rating__score'>{currentFilm.rating}</div>
        <p className='film-rating__meta'>
          <span className='film-rating__level'>
            {ratingConverter(currentFilm.rating)}
          </span>
          <span className='film-rating__count'>{`${currentFilm.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className='film-card__text'>
        <p>{currentFilm.description}</p>

        <p className='film-card__director'>
          <strong>Director: {currentFilm.director}</strong>
        </p>

        <p className='film-card__starring'>
          <strong>Starring: {currentFilm.starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default MovieOverview;
