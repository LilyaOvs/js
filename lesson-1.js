"use strict";
// Задание №1
let Tc = prompt("Введите темпиратуру по шкале Цельсия");
let Tf = (9 / 5) * Tc + 32;
alert(Tf);


//Задание №2
let name = "Василий";
let admin = name;
alert(admin);


//Задание №3
// 1. К 10 прибавляем 10, получаем 20
// 2. К 20 приписываем строку 10, получаем 2010
let sum = 10 + 10 + "10";
alert("Сумма равна: " + sum);

// 1. К 10 приписываем строку 10, получаем строку 1010
// 2. К строке 1010 приписываем число 10, получаем 101010
let sum2 = 10 + "10" + 10;
alert("Сумма равна: " + sum2);

// 1. К числу 10 прибовляем число 10, получаем 20
// 2. + перед строкой 10 преобразует строку в число
// 3. К 20 прибавляем число 10, получаем 30
let sum3 = 10 + 10 + +"10";
alert("Сумма равна: " + sum3);

// 1. - перед строкой преобразует строку в отрицательное число, в данному случае в 0
// 2. При делении на -0 получаем отрицательную бесконечность, то есть -Infinity 
let share = 10 / -"";
alert("Разность равна: " + share);

// 1. + перед строкой преобразует эту строку в число 2,5
// 2. Так как десятичные числа пишутся через . , то пронрамма не распознает число 2,5
// 3. При делении числа 10 на 2,5 получим NaN - не число
let share2 = 10 / +"2,5";
alert("Разность равна: " + share2);