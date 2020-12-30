import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as filmsAPI from '../../services/films-api';

import { POSTER_URL } from '../../services/films-api';
import PageHeading from '../../components/PageHeading/PageHeading';
import './MoviesPage.css';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    filmsAPI.fetchTrendingMovies().then(request => setMovies(request.results));
  }, []);

  return (
    <>
      <PageHeading text="Movies" />

      {movies && (
        <ul className="data-container">
          {movies.map(movie => (
            <li className="list__element" key={movie.id}>
              <Link to={`${url}/${movie.id}`}>
                <img
                  src={POSTER_URL + movie.poster_path}
                  alt={movie.title}
                  width="300"
                  height="450"
                />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
