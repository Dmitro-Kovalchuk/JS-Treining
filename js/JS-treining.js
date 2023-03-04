"use strict";
// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   // const totalPrice = (orderedQuantity * pricePerItem);
//   const orderedQuantity = 5;
//   const pricePerItem = 100;
//   console.log(orderedQuantity * pricePerItem);
//   // Change code above this line
//   return totalPrice;
// };

// Сортувати у порядку за зменшенням
//
// let arr = [5, 2, 1, -10, 8];

// const descendingArr = arr.sort((a, b) => a > b ? -1 : 1);

// console.lod(descendingArr);

//
// // ... ваш код для сортування за спаданням
//
// console.log(arr); // 8, 5, 2, 1, -10

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = {name: "Bruce", age: 25};
// let jhon = { name: "Jhon", age: 30};
// let maria = { name: "Maria", age: 28};
//
// let arr = [ bruce, jhon, maria ];
//
// sortByAge(arr);
//
// // тепер: [bruce, maria, jhon]
// alert(arr[0].name); // Bruce
// alert(arr[1].name); // Maria
// alert(arr[2].name); // Jhon

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Маючи масив потенційних виборців, поверніть об’єкт, що представляє результати голосування
// Включіть, скільки потенційних виборців було у віці 18-25 років, скільки від 26-35 років, скільки від 36-55 років, і скільки з кожного з цих вікових діапазонів фактично проголосували.
//   Отриманий об’єкт, що містить ці дані, повинен мати 6 властивостей. Дивіться приклад виведення внизу.

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  [
    filterGroupAge(arr, 18, 25),
    filterGroupAge(arr, 26, 35),
    filterGroupAge(arr, 36, 55),
  ].reduce((acc, item) => {
    console.log(item);
    const data = {
      countPeaple: item.lenght,
      countvoted: item.filter((item) => item.voted).length,
    };
    return [...acc, data];
  }, []);
}
function filterGroupAge(arr, fromAge, toAge) {
  return arr.filter((item) => item.age > minAge && item.age <= maxAge);
}

console.log(voterResults(voters));
