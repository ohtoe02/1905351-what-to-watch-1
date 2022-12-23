import HomePage from '../../pages/home-page/home-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import LoginPage from '../../pages/login-page/login-page';
import ReviewPage from '../../pages/review-page/review-page';
import Player from '../../pages/player/player';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppProps } from '../../types/Props';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../../pages/loading-page/loading-screen';
import { isAuthenticated } from '../../utils/check-authentication';
import { useAppSelector } from '../../hooks';

function App(props: AppProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector(
    (state) => state
  );

  if (isAuthenticated(authorizationStatus) || isDataLoaded) {
    return <LoadingScreen />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage homePageProps={props.homePageProps} />}
        />
        <Route path={'films/:id'} element={<MoviePage />} />
        <Route path={'films/:id/review'} element={<ReviewPage />} />
        <Route
          path={'mylist'}
          element={
            <PrivateRoute hasAccess={authorizationStatus}>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={'player/:id'} element={<Player />} />
        <Route path={'login'} element={<LoginPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
