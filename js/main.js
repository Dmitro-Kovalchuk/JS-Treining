"use strict";


// let b = 5
// const a = b * 2
// console.log(a)

// const yearOfBirth = 2020;
// console.log(yearOfBirth);

// let age
// age = 14
// console.log (age)

// const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";
// console.log (LOGIN_SUCCESS_MESSAGE)

// let age = 20
// age = 25
// console.log (age)


///////////////////////////////////////////////

// Оператор typeof
// Використовується для отримання типу значення змінної. Повертає на місце свого виклику тип значення змінної, вказаного після нього - рядок, в якому вказано тип.

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"


// alert()  Виводить модальне вікно з текстом!!
// const message = "JavaScript is awesome!";
// alert(message);

///////////////////////////////////////////////

// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

// const message = "JavaScript is awesome!";
// confirm(message);

// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"


///////////////////////////////////////////////

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0


// Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15



// Важливо запам'ятати терміни складових виразу. + - * / % називаються оператори, а те, на чому вони застосовуються - операнди.

///////////////////////////////////////////////

// Оператори порівняння
// повертають буль - true або false, тобто «так» або «ні»

// a > b і a < b - більше/менше
// a >= b і a <= b - більше/менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - строга рівність
// a !== b - строга нерівність


// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

///////////////////////////////////////////////


// Тому для перевірки рівності або нерівності двох значень, використовуються тільки оператори === (строга рівність) і !== (строга нерівність), які не виконують приведення типів операндів.


// ❌ Погано, виконується приведення типів
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false

// ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true

///////////////////////////////////////////////


// Більшість арифметичних операцій і математичних функцій перетворюють значення у число автоматично. Для того, щоб зробити це явно, використовуйте функцію Number(val), передаючи їй у val те, що потрібно привести до числа.

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"


///////////////////////////////////////////////


// Методи Number.parseInt() і Number.parseFloat()
// Перетворюють рядок символ за символом, доки це можливо. У разі виникнення помилки повертається підсумкове число.

// Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN


// Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

///////////////////////////////////////////////


// Перевірка на число
// Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:

// true - якщо значення val - NaN
// false - якщо значення val - не NaN
// Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false. Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

///////////////////////////////////////////////


// При додаванні 0.1 і 0.2, додаються дві неточності, виходить незначна, але все-таки помилка в обчисленнях.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// Звичайно, це не значить, що точні обчислення для таких чисел неможливі. Існує декілька методів вирішення цієї проблеми.

// Можна зробити їх цілими, помноживши на N, додати, а потім результат поділити також на N.

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// Ще один спосіб - додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

///////////////////////////////////////////////


// Один із вбудованих класів, який надає набір методів для роботи з числами. Знання всіх методів напам'ять не вимагається, тільки деяких, найбільш корисних.

// // Math.floor(num) - повертає найменше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - повертає найбільше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10



///////////////////////////////////////////////


// Послідовність операцій має значення, перетворення типів відбувається тільки в момент операції додавання з рядком, до цього моменту діють звичні правила математики.

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// Подивимось на різний порядок операндів.

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// В останньому прикладі відбулася математична операція додавання для перших двох чисел 1 і 2, після чого число 3 було перетворено у рядок "3" і зшито з рядком "4".



