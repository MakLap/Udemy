let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDb = {
  count: [numberOfFilms],
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
    if (personalMovieDb.count==undefined || 
     personalMovieDb.count=="") { 
    alert ("Произошла ошибка", "");
}
    else if (personalMovieDb.count < 10) {
    alert ("Просмотрено довольно мало фильмов","");
}
    else  if  (personalMovieDb.count >= 10 &&
     personalMovieDb.count < 30 ) {
     alert ("Вы классический зритель!", "");
}
     else if (personalMovieDb.count >= 30) {
     alert (" Вы киноман!", "");
}   
   
/*for (let i=0; i<2; i++ ) {
       let lastFilm =prompt("Последний просмотренный фильм?", ""), 
           evaluate = prompt("Как вы его оцените", ""); 
          if (((lastFilm && evaluate) !== "" || (lastFilm && evaluate) !== null) && String.length <=50) {
            personalMovieDb.movies[lastFilm] = evaluate;
          }
          else {i--;}
}*/


for (let i=0; i<2;) {
  for(let lastFilm =prompt("Последний просмотренный фильм?", ""), 
       evaluate = prompt("Как вы его оцените", ""); (lastFilm && evaluate) !== null &&
       lastFilm.length < 50 && evaluate.length < 50 &&       
       (lastFilm && evaluate) !== "";) {
        personalMovieDb.movies[lastFilm] = evaluate;
        i++;
        break;
       }
 }

console.log(personalMovieDb);

