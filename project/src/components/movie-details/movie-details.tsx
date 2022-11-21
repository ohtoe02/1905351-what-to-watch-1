import { Film } from '../../types/Film';
import convertRuntime from '../../utils/convert-runtime';

function MovieDetails({ currentFilm }: { currentFilm: Film }): JSX.Element {
  return (
    <div className='film-card__text film-card__row'>
      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Director</strong>
          <span className='film-card__details-value'>
            {currentFilm.director}
          </span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Starring</strong>
          <span className='film-card__details-value'>
            {currentFilm.starring.map((actor, id) => (
              <span key={actor}>
                {id < currentFilm.starring.length - 1 ? (
                  <>
                    {actor}, <br />
                  </>
                ) : (
                  actor
                )}
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className='film-card__text-col'>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Run Time</strong>
          <span className='film-card__details-value'>
            {convertRuntime(currentFilm.runTime)}
          </span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Genre</strong>
          <span className='film-card__details-value'>{currentFilm.genre}</span>
        </p>
        <p className='film-card__details-item'>
          <strong className='film-card__details-name'>Released</strong>
          <span className='film-card__details-value'>
            {currentFilm.released}
          </span>
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;
