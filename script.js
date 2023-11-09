'use strict';

const chances = 10;

const guessNum = function(curNumber, count) {

   const play = function() {

      if (count > 0) {
         const num = prompt("Угадай число от 1 до 100");

         if (num === null) {
            alert("Игра окончена");
            return;
         }

         if (isNaN(num) || num.trim() === "") {
            alert("Введи число!");
            play();
         }

         if (num > curNumber && num !== null) {
            alert("Загаданное число меньше");
            count--;
            play();
         }

         if (num < curNumber && num !== null) {
            alert("Загаданное число больше");
            count--;
            play();
         }

         if (+num === curNumber) {
            const repeat = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

            if (repeat === true) guessNum(20, chances);
         }
      } else {
         const repeat = confirm("Попытки закончились, хотите сыграть еще?");

         if (repeat === true) guessNum(20, chances);
      }
   }

   play();
}

guessNum(20, chances);