"use strict";

//Задание №1

//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2, так как здесь префиксная форма инкремента, значение переменной сначала увеличится на 1, потом выведется

//пример 2
d = b++;
alert(d); //ответ: 1, так как здесь постфиксная форма инкремента, значение переменной сначала вернётся, а потом увеличится на 1

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5, так как здесь префиксная форма инкремента, значение переменной сначала увеличится на 1, a = 3, получится 2 + 3, поэтому результат 5

//пример 4
d = 2 + b++;
alert(d); //ответ: 4, так как здесь постфиксная форма инкремента, сначала выполнится 2 + 2, выведется результат 4, потом значение переменной увеличится на 1, b = 3
alert(a); //3
alert(b); //3


//Задание №2

let y = 2;
let x = 1 + (y *= 2);
// 1. Преобразуем запись в скобках: y = y * 2, получится 4 и запишется в переменную y
// 2. x = 1 + 4 получим 5
alert(y); // 4
alert(x); //5

//Задание №3

let num1 = parseInt(prompt("Ведите целое число"));
let num2 = parseInt(prompt("Ведите второе целое число"));

if (num1 >= 0 && num2 >= 0) {
    let diff = num2 - num1;
    alert(diff);
} else if (num1 < 0 && num2 < 0) {
    let mul = num2 * num1;
    alert(mul);
} else {
    let sum = num2 + num1;
    alert(sum);
}


//Задание №4

//Функция складывает аргументы
//@param {number} p
//@param {number} q
//@returns {number}

function addition(p, q) {
    return p + q;
}
addition(12, 4);

//Функция вычитает q из p
//@param {number} p
//@param {number} q
//@returns {number}

function subtraction(p, q) {
    return p - q;
}
subtraction(12, 4);

//Функция перемножает аргументы
//@param {number} p
//@param {number} q
//@returns {number}

function multiplication(p, q) {
    return p * q;
}
multiplication(2, 4);

//Функция делит p на q
//@param {number} p
//@param {number} q
//@returns {number}

function division(p, q) {
    return p / q;
}
division(12, 4);


//Задание №5

//Функция получает два числа и вызывает одну из функций из задания №4
//@param {number} arg1
//@param {number} arg2
//@param {string} operation может означать одну из математических операций: "+", "-", "*" или "/"
//@returns {number}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
    }
}

console.log(mathOperation(12, 4, "+"));
console.log(mathOperation(12, 4, "-"));
console.log(mathOperation(2, 4, "*"));
console.log(mathOperation(12, 4, "/"));