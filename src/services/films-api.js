// https://api.themoviedb.org/3/movie/550?api_key=fd1f012386f0b2bb4075522698075fb1

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fd1f012386f0b2bb4075522698075fb1';

const TREND_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(TREND_URL);
}

// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// export function fetchAuthors() {
//   return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`);
// }

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }