let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
let lastFilm = prompt("Последний просмотренный фильм?", ""),
  lastFilm2 = prompt("Последний просмотренный фильм?", ""),
  evaluate = prompt("Как вы его оцените", ""),
  evaluate2 = prompt("Как вы его оцените", "");

personalMovieDb.movies[lastFilm] = evaluate;
personalMovieDb.movies[lastFilm2] = evaluate2;
console.log(personalMovieDb);