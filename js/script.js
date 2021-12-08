'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movie: {},
  actors: {},
  genres: [],
  privat: false

};

const questionFirst = prompt ('Один из последних просмотренных фильмов?', '');
const questionSecond = prompt ('На сколько оцените его?', '');
console.log(movie);