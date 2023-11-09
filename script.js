'use strict';

const guessNum = function(curNumber) {

   const play = function() {
      const num = prompt("Угадай число от 1 до 100");

      if (num === null) {
         alert("Игра окончена");
         return;
      }

      if (isNaN(num) || num.trim() === "") {
         alert("Введи число!");
         play();
      }

      if (num > curNumber) {
         alert("Загаданное число меньше");
         play();
      }

      if (num < curNumber) {
         alert("Загаданное число больше");
         play();
      }

      if (+num === curNumber) {
         alert("Поздравляю, Вы угадали!!!");
      }
   }

   play();
}

guessNum(20);