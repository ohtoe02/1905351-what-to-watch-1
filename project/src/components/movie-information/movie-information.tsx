import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import { Film } from '../../types/Film';
import { useAppSelector } from '../../hooks';

type MovieInformationProps = {
  currentTab: string;
  film: Film;
};

function MovieInformation({ film }: MovieInformationProps): JSX.Element {
  const tabs: { [k: string]: JSX.Element } = {
    Overview: <MovieOverview currentFilm={film}></MovieOverview>,
    Details: <MovieDetails currentFilm={film}></MovieDetails>,
    Reviews: <MovieReviews currentFilm={film}></MovieReviews>
  };

  const currentTab = useAppSelector((state) => state.filmPageTab);

  return tabs[currentTab];
}

export default MovieInformation;
