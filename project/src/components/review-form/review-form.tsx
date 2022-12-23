import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { UserComment } from '../../types/UserComment';
import { postComment } from '../../store/api-actions';

function ReviewForm(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(true);
  const [reviewData, setReviewData] = useState({
    'review-text': '',
    rating: 0
  });

  const id = Number(useParams().id);
  const dispatch = useAppDispatch();

  const reviewTextChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });

    if (value.length > 50 && value.length < 400) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: +value });
    if (value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    onSubmit({comment: reviewData['review-text'], rating: reviewData.rating, filmId: id.toString()});
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData));
  };

  return (
    <div className='add-review'>
      <form onSubmit={submitHandler} className='add-review__form'>
        <div className='rating'>
          <div className='rating__stars'>
            {Array.from({ length: 10 }, (_, i) => i + 1)
              .reverse()
              .map((starNumber) => (
                <>
                  <input
                    className='rating__input'
                    id={`star-${starNumber}`}
                    key={starNumber}
                    type='radio'
                    name='rating'
                    value={starNumber}
                    onChange={ratingChangeHandler}
                  />
                  <label className='rating__label' htmlFor={`star-${starNumber}`}>
                    {`Rating ${starNumber}`}
                  </label>
                </>
              ))}
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            name='review-text'
            id='review-text'
            placeholder='Review text'
            value={reviewData['review-text']}
            onChange={reviewTextChangeHandler}
          >
          </textarea>
          <div className='add-review__submit'>
            <button className='add-review__btn' type='submit' disabled={isDisabled}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
