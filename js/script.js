'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) //проверяем пуста ли строка или пользователь отменяет действие или пользователь ввел именно число 
          {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');//просто переспрашиваем
          } 
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false

};


// console.log(personalMovieDB);
//////////////////////////////////////////////////////////
// if ( 5 == 7) {
//     console.log('Верно');
// } else {
//     console.log('No Discription');
// }
////////////////////////
///////////////////////////////////
///////////////////////////////////

function rememberMyFilms() {
  for (let i = 0; i < 3; i++){
    const a = prompt('Один из последних просмотренных филь мов?', ''),
          b = prompt('На сколько оцените его?', '');
          
  
          if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('This Ok');
          } else {
              console.log('error');
              i--;//если условие не выполнилось вернуться на одру итерацию назад.
          }
  } 
}
 
// rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log(alert("Просмотрено довольно мало фильмов"));
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log(alert("Вы классический зритель"));
  } else if (personalMovieDB.count >= 30)  {
      console.log("Вы Киноман");
    } else {
      console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {//если наша бза не скрыта то ее покзываем
    console.log(personalMovieDB) ;
  }
}
 
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) //выводим цыкл нчиня с 1 повтор 3 раза и i++
  {
  personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
////////////////////////////////////////////////////////////////////////
// let x = 0;
// while (x < 1){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//     // Если а не "отмена" и b не "отмена" и a не пустая строка и b не пустая строка и длина а < 50 символов то
//     personalMovieDB.movies[a] = b;
//     console.log("Done!");
//     } else {
//         console.log("Error");
//         x--;
//     }
//     x++;
// }
// Second
// let x = 0;
// while (x < 1){
//     const   a = prompt('Последний фильм?', ''),
//             b = +prompt('Ваша оценка?', '');
//     (a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b : x--, console.log("Error");
//     x++;
// }
// console.log(personalMovieDB);
///////////////////////////////////////////////////////////////

// var shoppingDone = false;

// if (shoppingDone === true) {
//   var childsAllowance = 10;
// } else {
//   var childsAllowance = 5;
// }

// 
////////////////////;//////////////////////////
///method
////////////////
// const str = "test";
// const arr = [ 1, 2 ,4]