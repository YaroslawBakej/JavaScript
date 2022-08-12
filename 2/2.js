// Найти максимальное число из 2 введенных (2 способа)
// let a = +prompt(`enter value`)
// let b = +prompt(`enter value`)

// console.log(Math.max(a, b));

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }
// console.log(a > b ? a : b);

// Выявить является ли введенное число четным
// let a = +prompt(`Enter value`)

// if (a % 2 === 0) {
//     console.log(`Четное`);
// } else {
//     console.log(`Нечетное`);
// }
// console.log(a % 2 === 0 ? `четное` : `нечетное`);


// let a = +prompt(`enter value`)
// let res =;
// switch (a) {
//     case 1:
//         res = `пнд`;
//         break
//     case 2:
//         res = `вт`;
//         break
//     case 3:
//         res = `ср`;
//         break
//     case 4:
//         res = `чтв`;
//         break
//     case 5:
//         res = `птн`;
//         break
//     case 6:
//         res = `пнд`;
//         break
//     case 7:
//         res = `пнд`;
//         break
//     default:
//         res = `Повторите ввод`;
// }
// console.log(res)


// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNaN)

// let a = prompt(`Enter`)

// if (isNaN(a)) {
//     console.log(false);
// } else {
//     console.log(true);
// }
// console.log(isNaN(a) ? false : true);

// Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// num + " однозначное положительное". (length)

//  let a = prompt(`Enter value`)

// if (!isNaN(a)) {
//     // if (+a > 0) {
//     //     console.log(`положительное`);
//     // } else {
//     //     console.log(`отрицательное`);
//     // }
//     // (+a>0 ? console.log(`положительное`):console.log(`отрицательное`))
//     // console.log(a.length);
//     console.log(`${(+a > 0) ? `положительное` : `отрицательное`} \n `${ a.length}``);

// } else {
//     console.log(`не корректно`)
// }

// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых.
// Добавить проверку на ввод только чисел
// let a = prompt(`enter value`)


// if (!isNaN(a)) {
//     let res = Math.sqrt(a)
//     // if (Number.isInteger(res)) {
//     //     console.log(res);
//     // } else {
//     //     console.log(Math.round(res));
//     // }
//     console.log(Number.isInteger(res) ? res : Math.round(res));
// }

// Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// Определите, через какое время автомобили встретятся, если расстояние между
// ними равно S км. Добавить проверку на ввод только чисел

// let s = +prompt(`enter value`)
// let v1 = prompt(`v1 enter`)
// let v2 = prompt(`v1 enter`)

// // if (!isNaN(s)&&!isNaN(v1)&&!isNaN(v2)){
// //    console.log(`${ t= s/(v1+v2)}`);
// // } else {
// //     console.log(`некорретные данные`);
// // }
// !isNaN(s) && !isNaN(v1) && !isNaN(v2) ? console.log(`${t = s / (v1 + v2)}`) : console.log(`некорретные данные`)

// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

// let a = prompt(`Enter Value`)
// let res =;
// switch (a) {
//     case 12:
//     case 1:
//     case 2:
//         res = `зима`
//         break;
//     case 3:
//     case 4:
//     case 5:
//         res = `зима`
//         break;
//     case 6:
//     case 7:
//     case 8:
//         res = `зима`
//         break;
//     case 9:
//     case 10:
//     case 11:
//         res = `зима`
//         break;

// }
// console.log(res);

// if (a === 12 || a === 1 || a === 2) {
//     console.log('зима');
// } else if (a === 3 || a === 4 || a === 5) {
//     console.log('весна');
// }
// else if (a === 6 || a === 7 || a === 8) {
//     console.log('лето');
// }
// else if (a === 9 || a === 10 || a === 11) {
//     console.log('осень');
// }

// Пользователь вводит одно число. Необходимо вывести обратное ему (число
//     является обратным при 1/x). Если при этом введённое с клавиатуры число – ноль,
//     то вывести «Обратного числа не существует». Добавить проверку на ввод только
//     чисел

// let a = prompt(`wnter valeu`)

// if (!isNaN(a)) {
//     if (a == 0) {
//         console.log(`Обратного числа не существует`);
//     } else {
//         console.log(`${1 / a}`)
//     }
// } else {
//     console.log(`некорретный ввод`);
// }

// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

// let a=prompt(`enter value`)
// let res=a/100
// if (!isNaN(a)){
//     if(Number.isInteger(res)){
//         console.log(res);
//     }else{
//         console.log(Math.round(res));
//     }
// } else{
//     console.log(`некорректный ввод`);
// }



