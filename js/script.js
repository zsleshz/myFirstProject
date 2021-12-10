'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};


console.log(personalMovieDB);
////////////////////////////////////////////////////////////
// if ( 5 == 7) {
//     console.log('Верно');
// } else {
//     console.log('No Discription');
// }
//////////////////////////
// if (personalMovieDB.count < 10) {
//     console.log(alert("Просмотрено довольно мало фильмов"));
// } 
// else {
//   console.log(alert("Вы классический зритель"));
// }
/////////////////////////////////////
/////////////////////////////////////
for (let i = 0; i < 2; i++){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        

        if (a != null && b != null && a != '' && b != '' && a.length < 50){
          personalMovieDB.movies[a] = b;
          console.log('This Ok');
        } else {
            console.log('error');
            i--;
        }
}

console.log(personalMovieDB);