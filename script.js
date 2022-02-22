/*let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
  }
}
start();

let personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function detectPersonalLevel() {
  if (personalMovieDb.count == undefined ||
    personalMovieDb.count == "") {
    alert("Произошла ошибка", "");
  } else if (personalMovieDb.count < 10) {
    alert("Просмотрено довольно мало фильмов", "");
  } else if (personalMovieDb.count >= 10 &&
    personalMovieDb.count < 30) {
    alert("Вы классический зритель!", "");
  } else if (personalMovieDb.count >= 30) {
    alert(" Вы киноман!", "");
  }

}
detectPersonalLevel();

/*for (let i=0; i<2; i++ ) {
       let lastFilm =prompt("Последний просмотренный фильм?", ""), 
           evaluate = prompt("Как вы его оцените", ""); 
          if (((lastFilm && evaluate) !== "" || (lastFilm && evaluate) !== null) && String.length <=50) {
            personalMovieDb.movies[lastFilm] = evaluate;
          }
          else {i--;}
}*/
/*
function rememberMyFilms() {
  for (let i = 0; i < 2;) {
    for (let lastFilm = prompt("Последний просмотренный фильм?", ""),
        evaluate = prompt("Как вы его оцените", "");
      (lastFilm && evaluate) !== null &&
      lastFilm.length < 50 && evaluate.length < 50 &&
      (lastFilm && evaluate) !== "";) {
      personalMovieDb.movies[lastFilm] = evaluate;
      i++;
      break;
    }
  }

}
rememberMyFilms();


function writeYourGenres() {

  for (let i = 1; i <= 3; i++) {
    let likeGenres = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDb.genres[i - 1] = likeGenres;
  }
}
writeYourGenres();

function showMyDB() {
  if (personalMovieDb.privat == false) {
    console.log(personalMovieDb);
  }
}
showMyDB();*/

function pow(x,n) {
  let i=1;
  for (; n!==0; n--){
      i*=x;
      }
 console.log (i);
  }
  pow (2,1);