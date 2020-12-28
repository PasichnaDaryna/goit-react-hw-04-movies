import PageHeading from '../components/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as filmsAPI from '../services/films-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
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
          <p>Genre:</p>
        </>
      )}
    </>
  );
}
