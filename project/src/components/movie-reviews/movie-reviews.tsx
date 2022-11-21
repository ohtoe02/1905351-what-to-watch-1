import { Film } from '../../types/Film';
import { Comments } from '../../types/Comments';
import comments from '../../mocks/comments';
import formatDate from '../../utils/date-formatter';

function MovieReviews({ currentFilm }: { currentFilm: Film }): JSX.Element {
  const movieComments: Comments = comments;

  return (
    <div className='film-card__reviews film-card__row'>
      <div>
        {movieComments.map((comment) => (
          <div className='review' key={comment.id}>
            <blockquote className='review__quote'>
              <p className='review__text'>{comment.comment}</p>

              <footer className='review__details'>
                <cite className='review__author'>{comment.user.name}</cite>
                <time className='review__date' dateTime={comment.date}>
                  {`${formatDate(comment.date)}`}
                </time>
              </footer>
            </blockquote>

            <div className='review__rating'>
              {`${comment.rating}`.replace('.', ',')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieReviews;
