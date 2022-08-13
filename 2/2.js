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

// Напишите программу, в которой рассчитывается сумма и произведение цифр
// положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6

// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 - чет

// let a = prompt(`введите четырехзначное число`)

// if (!isNaN(a) && a.length == 4) {
//     String(a)
//     let x = Array.from(String(a))
//     console.log(x);

// x.forEach(function (item, i, arr) {
//     if (item % 2 == 0 && item != 0) {
//         console.log(item + ` четное`)
//     } else if (item != 0) {
//         console.log(item + ` нечетное`);
//     } else {
//         console.log(item + ` ноль`);
//     }
// })
// } else {
//     console.log(`некорректный ввод`)
// }

// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

// let a = prompt(`enter value`)
// let b = prompt(`enter value 2`)

// if (!isNaN(a, b) && a, b <= 10) {
//     if (a == 0) {
//         console.log(``)
//     } else {
//         console.log(a + b);
//     }
// }else{
//     console.log(`некорректный ввод`)
// }

// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки

// let a=prompt(`enter your message`)

// // if (isNaN(a)){
// //     console.log(a.length);
// // } else{
// //     console.log(`enter message`);
// // }
// isNaN(a)? console.log(a.length):console.log(`enter message`);

// Пользователь вводит строку. Вывести первый символ строки (индексы)

// let a=prompt(`enter your message`)

// console.log(a[0]);

// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре

// let a=prompt(`enter your message`)

// // if(isNaN(a)){
// //     console.log(a.toUpperCase());
// // }else{
// //     console.log(`enter a string`);
// // }

// isNaN(a)?console.log(a.toUpperCase()):console.log(`enter a string`);

// Пользователь вводит строку. Необходимо повторить ее трижды

// let a=prompt(`enter your message`)

// console.log(a.repeat(3));

// Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

// let a = prompt(`enter your message`)
//     b=`hschool`
// if (isNaN(a)) {
//     if (a == b) {
//         console.log(`true`);
//     } else {
//         console.log(`false`);
//     }
// }else{
//     if(a%2==0){
//         console.log(`четное`);
//     }else{
//         console.log(`нечетное`);
//     }
// }

// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

// let a=prompt(`enter your message`)

// // if(isNaN(a)){
// //     console.log(Array.from(a));
// // }else{
// //     console.log(`enter your message`);
// // }

// isNaN(a)?console.log(Array.from(a)):console.log(`enter your message`);

// Пользователь ввел строку. Убрать лишние пробелы, привести к маленькому
// регистру. Добавить проверку на ввод только текста. Необходимо преобразовать
// строку в строку вида
// х-х-х-х-х-х...
// hsChOoL -> h-s-c-h-o-o-l

let a=prompt(`enter your message`)

let b=Array.from(a)
let c=[];
console.log(b);
for(let i=0; i<b.length;i++){
    if(b[i]!=0){
    c.push(b[i]);
}
} 
console.log(c.join(`_`));
