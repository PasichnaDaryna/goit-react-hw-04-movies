import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/Appbar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
// import Cast from './views/Cast';
// import Reviews from './views/Reviews';
import NotFoundView from './views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      {/* <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>

        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>

        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch> */}

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
    </Container>
  );
}
