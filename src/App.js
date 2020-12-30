import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/Appbar';
import Container from './components/Container/Container';
// import HomeView from './views/HomeView/HomeView';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import Cast from './views/Cast';
// import Reviews from './views/Reviews';
// import NotFoundView from './views/FilmErrorView';
import FilmPendingView from './views/FilmPendingView/FilmPendingView';
import { ToastContainer } from 'react-toastify';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const NotFoundView = lazy(() =>
  import(
    './views/FilmErrorView/FilmErrorView' /* webpackChunkName: "NotFoundView" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<FilmPendingView />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
