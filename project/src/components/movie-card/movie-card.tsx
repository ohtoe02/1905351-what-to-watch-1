import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

type MovieCardProps = {
  title: string;
  poster: string;
  id: number;
  hoverHandler: (event: MouseEvent<HTMLDivElement>) => void;
  outHandler: (event: MouseEvent<HTMLDivElement>) => void;
};

function MovieCard({
  title,
  poster,
  id,
  hoverHandler,
  outHandler
}: MovieCardProps): JSX.Element {
  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseOver={hoverHandler}
      onMouseLeave={outHandler}
    >
      <div className='small-film-card__image'>
        <img src={poster} alt={title} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <Link to={`/films/${id}`} className='small-film-card__link'>
          {title}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
