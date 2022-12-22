import { useAppDispatch } from '../../hooks';
import { increaseCardCount } from '../../store/action';

type ShowMoreButtonProps = {
  isPossibleToLoadMore: boolean;
}

function ShowMoreButton({isPossibleToLoadMore}: ShowMoreButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      {
        isPossibleToLoadMore &&
        <button
          className="catalog__button"
          type="button"
          onClick={ (evt) => {
            evt.preventDefault();
            dispatch(increaseCardCount());
          }}
        >
          Show more
        </button>
      }
    </div>
  );
}

export default ShowMoreButton;
