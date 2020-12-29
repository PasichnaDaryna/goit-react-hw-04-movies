import PageHeading from '../components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';
import * as filmsAPI from '../services/films-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    filmsAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <PageHeading text={`Film ${movieId}`} />

      {movie && (
        <>
          <img
            src={`${filmsAPI.POSTER_URL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <h3>User score: {movie.vote_average}</h3>
          <p>{movie.overview}</p>

          {movie.genres && (
            <>
              <p>Genres</p>
              <ul>
                {movie.genres.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </>
          )}

          <nav>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
            <br></br>

            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </nav>

          <Switch>
            <Route path={`${path}:movieId/cast`}>
              <Cast movieId={movieId} />
            </Route>

            <Route path={`${path}:movieId/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}
