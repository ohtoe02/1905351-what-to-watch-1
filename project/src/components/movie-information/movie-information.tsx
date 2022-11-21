import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import { Film } from '../../types/Film';

type MovieInformationProps = {
  currentTab: string;
  film: Film;
};

function MovieInformation({
  currentTab,
  film
}: MovieInformationProps): JSX.Element {
  const tabs: { [k: string]: JSX.Element } = {
    Overview: <MovieOverview currentFilm={film} ></MovieOverview>,
    Details: <MovieDetails currentFilm={film} ></MovieDetails>,
    Reviews: <MovieReviews currentFilm={film} ></MovieReviews>
  };

  return tabs[currentTab];
}

export default MovieInformation;
