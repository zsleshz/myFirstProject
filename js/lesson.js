////Obkject ES6
"use strict";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// 1 console.log(options["colors"]["border"]);///Заапрос обьект в обьекте
// 2 console.log(Object.keys(options).length);////эта структура дает нам маив и узнаем колшичество там обьектов

//delete options.name; ///удаляет свойство из обьекта
//////////////////////////////////////
//////////////////////////////////////
//////////////перебор обьектов for in
// for (let key in options){/// в скобкх что перебираем ключ значеие
//     console.log(`свойство ${key} имеет знаачение ${options[key]}`);
// }
//////////////////////////////////////
//////////////////////////////////////
//Перебор обьектов внутри обьекта
// for (let key in options){/// в скобкх что перебираем ключ значеие
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет знаачение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`свойство ${key} имеет знаачение ${options[key]}`);
//     } 
// }
////////////////////////////////////////////////////
/////////////////////////////////////////////
///прием счетчика
// let counter = 0;
// for (let key in options){/// в скобкх что перебираем ключ значеие
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет знаачение ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`свойство ${key} имеет знаачение ${options[key]}`);
//         counter++;
//     } 
// }
// console.log(counter);

///////////////////
//Деструкторизация
//////////////////
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();
// const {border,bg} = options.colors;  ///создаем переменую,дальше помещаем переменные которые хотим вытащить
// console.log(bg);

///////////////////
//Массивы и псевдомассивы
//////////////////

const arr = [1,2,3,4,5,8];

// arr.pop();//удаляет последний элемент массива
// arr.push();//Добавляет элемент в конец нашего масива. В скобках какой элемет будем добавлять

////обычнй цикл
// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// метод for of
// for (let value of arr) {
//     console.log(value);
// }

// метод forEach -перебор всего массива

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

////
// arr.split -превращает строку в массив

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; ')); ////метод массив склеили обратно в строку через ; ///
products.sort();///сортирует массив как строки по алфавиту. Если использовать числа то он их переведет в строки и потом сравнит посимвольно и выстроит.