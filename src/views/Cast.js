import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMovieCast, POSTER_URL } from '../services/films-api';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(request => setCast(request.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul>
            {cast.map(item => (
              <>
                {item.profile_path && (
                  <li key={item.profile_path}>
                    <img
                      src={POSTER_URL + item.profile_path}
                      alt={item.name}
                      widht="100"
                      height="150"
                    />
                    <p> {item.name}</p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
