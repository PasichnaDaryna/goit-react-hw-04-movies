import { useState, useEffect } from 'react';

import { Route, useRouteMatch } from 'react-router-dom';

import * as filmsAPI from '../services/films-api';
import { POSTER_URL } from '../services/films-api';
import PageHeading from '../components/PageHeading/PageHeading';
import AuthorSubView from './AuthorSubView';

// export default function Cast({ movieId }) {
//   const [authors, setAuhors] = useState([]);

//   useEffect(() => {
//     fetchMovieCast(movieId).then(request => setAuhors(request.authors));
//   }, [movieId]);

//  return (
//     <>
//       {authors && (
//         <>
//           <ul >
//             {authors.map(author => (
//               <>
//                 {author.profile_path && (
//                   <li key={author.profile_path} >
//                     <img
//                       src={POSTER_URL + author.profile_path}
//                       alt={author.name}
//                       widht="100"
//                       height="150"
//                     />
//                     <p> {author.name}</p>
//                   </li>
//                 )}
//               </>
//             ))}
//           </ul>
//         </>
//       )}
//     </>
//   );
// }

// Cast.propTypes = {
//   movieId: PropTypes.string.isRequired,
// };

export default function Cast() {
  const { path } = useRouteMatch();
  const [authors, setAuhors] = useState([]);

  useEffect(() => {
    filmsAPI.fetchMovieCast().then(request => setAuhors(request.authors));
  }, []);

  return (
    <>
      <PageHeading text="Авторы" />

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.profile_path}>
              <img
                src={POSTER_URL + author.profile_path}
                alt={author.name}
                widht="100"
                height="150"
              />
              <p> {author.name}</p>
            </li>
          ))}
        </ul>
      )}
      <hr />
      {/* 
      <Route path={`${path}/:authorId`}>
        {authors && <AuthorSubView authors={authors} />}
      </Route> */}
    </>
  );
}
