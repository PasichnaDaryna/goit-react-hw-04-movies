import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as filmsAPI from '../services/films-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    filmsAPI.fetchTrendingMovies().then(request => setMovies(request.results));
  }, []);

  return (
    <>
      <PageHeading text="Films" />

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
