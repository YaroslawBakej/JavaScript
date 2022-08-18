// 1. Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

// let a=prompt(`enter value`).trim();

// if(isNaN(a)&&a.toLowerCase()===`hschool`){
//     console.log(`true`);

// }else{
//     console.log(`false`);
// }


// Ввести строку. Проверить является ли это число или строка. Если число, то
// выяснить, четное или нет. Если это строка то преобразовать строку в массив, где
// каждый символ – один элемент массива
// ‘hschool’ => [‘h’, ‘s’, ‘c’, ‘h’, ‘o’, ‘o’, ‘l’]

// let a = prompt(`enter value`).trim();
// if (isNaN(a)) {
//     console.log(a.split(``));
// } else {
//     console.log(a % 2 == 0 ? `четное` : `нечетное`)
// }

// Преобразовать строку ‘сStaCK DevELoper’ в массив вида [‘full, ‘stack’, ‘developer’]
// let a = `сStaCK DevELoper`.trim().toLowerCase();
// let b = a.slice(1, 5)
// let c = a.slice(6)
// let d = `full`
// console.log([d, b, c]);

// ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP

// let a=prompt(`enter your message`)

// console.log(a.toUpperCase().replaceAll(` `, `-`));

// Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы
// let a = `dfghj dfg`.trim()

// if(!isNaN(a)){
//     console.log(`ошибка ввода`);
// }else{

//     console.log(`${a[0].toUpperCase()}`+`${a.slice(1)}`)
// }

// На вход программе подаётся строка. Замените все @ на '!' с помощью
// глобального поиска и замены (2 способа)

// let a=prompt(`enter message`)
//  console.log(a.replaceAll(`@`, `!`));

// console.log(a.split(`@`).join(`!`));

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами

// let a = `aaa bbbbbb ccc`

// console.log(a.slice(a.indexOf(`b`), a.lastIndexOf(`b`)) + `b`);

// На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

// let a = 'xxxx-xx-xx'.split(`-`).reverse().join(`/`)

// console.log(a);

// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

// let a = `qwe qwe qwe`
// let b = a.split(` `)
// console.log(a.length, b[0], b[0].length + 1);

// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

// let a=`х-х-х`.split(`-`).join(`!`);

// console.log(a);

// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx'.

// let a = `xxxx-xx-xx`.split(`-`).reverse().join(`.`);

// console.log(a);

// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в
// строку 'я+учу+javascript+!'.

// let arr=['я', 'учу', 'javascript', '!'].join(`+`);

// console.log(arr);

// Дан массив. Вывести каждый одельный элемент в консоль (for)

// let arr = []

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// На вход программе подается строка текста, состоящая из слов, разделенных
// ровно одним пробелом. Напишите программу, которая подсчитывает количество
// слов в ней

// let a=`qwe qwe qwe`.split(` `);

// console.log(a.length);

// Пользователь вводит строку. Необходимо посчитать количество гласных (for)

// let a = prompt(`enter value`).toLowerCase()

// let counter = 0

// for (i = 0; i < a.length; i++) {
//     if (a[i] == `a` || a[i] == `e` || a[i] == `y` || a[i] == `u` || a[i] == `i` || a[i] == `o`) {
//         counter += 1
//     }
// }
//  console.log(counter);

// Пользователь вводит строку. Необходимо посчитать количество согласных (for)

// let a = prompt(`enter value`).toLowerCase()
// for (i = 0; i < a.length; i++) {
//     if (a[i] != `a` && a[i] != `e` && a[i] != `y` && a[i] != `u` && a[i] != `i` && a[i] != `o`) {
//         counter += 1
//     }
// }
//  console.log(counter);


// Пользователь вводит строку. Необходимо вывести все гласные отдельной
// строкой (for)
// fullstack => ua

// let a = `fullstack`
// let b = []
// for (i = 0; i < a.length; i++) {
//     if (a[i] == `a` || a[i] == `e` || a[i] == `y` || a[i] == `u` || a[i] == `i` || a[i] == `o`) {
//         b.push(a[i])
//     }
// }
// console.log(b.join(``));

// На вход программе подается строка. Преобразуйте первую букву каждого слова
// строки в верхний регистр (for)

// let a = `qwe kje uje`.split(` `);
// let b = []
// for (i = 0; i < a.length; i++) {
//     b.push(a[i].slice(0, 1).toUpperCase() + a[i].slice(1));
// }
// console.log(b.join(` `));

// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого),
// преобразовать в верхний регистр (for)

// let a = `qwe_kje_uje`.split(`_`);
// let b = [a[0]]
// for (i = 1; i < a.length; i++) {
//     b.push(a[i].slice(0, 1).toUpperCase() + a[i].slice(1));
// }
// console.log(b.join(` `));

// На вход программе подается строка, состоящая из имени и фамилии человека,
// разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// и фамилия начинаются с заглавной буквы.
// Chris Alan => true
// chris alan => false

// let a = prompt(`Enter your fullname`).split(` `);
// let b = []
// for (i = 0; i < a.length; i++) {
//     b.push(a[i].slice(0, 1).toUpperCase() + a[i].slice(1));
// }

// b === a ? console.log(`true`) : console.log(`false`);

// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

// let a = `Swap Case`
// let b = []
// for (i = 0; i < a.length; i++) {
//     if (a[i] === a[i].toLowerCase()) {
//         b.push(a[i].toUpperCase());
//     } else {
//         b.push(a[i].toLowerCase());
//     }
// }
// console.log(b.join(``));

// На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true

// let a = `я очень хороший текст`.toLowerCase()

// console.log(a.includes(`хорош`));

// На вход программе подается строка. Напишите программу, которая подсчитывает
// количество буквенных символов в нижнем регистре.
// abcABCD12345 => 3

// let a = `abcABCD12345`
// let counter = 0
// for (i = 0; i < a.length; i++) {
//     if (a[i] === a[i].toLowerCase() && isNaN(a[i])) {
//         counter += 1
//     }
// }
// console.log(counter);

// На вход программе подается строка из букв А, Г, Ц, Т. Напишите программу,
// которая подсчитывает сколько букв
// АааГГЦЦцТТтттА => А – 4 Г – 2 Ц – 3 Т – 5

// let str = `АааГГЦЦцТТтттА`.toLowerCase()
// let a = 0
// let g = 0
// let c = 0
// let t = 0

// for (i = 0; i < str.length; i++) {
//     if (str[i] == `а`) {
//         a += 1
//     } else if (str[i] == `г`) {
//         g += 1
//     } else if (str[i] == `ц`) {
//         c += 1

//     } else if (str[i] == `т`) {
//         t += 1
//     }
// }
// console.log(`A-`+`${a}`,`Г-`+`${g}`,`Ц-`+`${c}`,`Т-`+`${t}`);

// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если
// заканчивается, то вывести true, в противном случае false

// let a = prompt(`enter site url`)

// if (a.includes(`.com`) || a.includes(`.ru`)) {
//     console.log(`true`);
// } else {
//     console.log(`false`);
// }

// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

// let a = prompt(`enter site url`)

// if (a.includes(`http`) && a.includes(`/`) && (a.includes(`.com`) || a.includes(`.ru`))) {
//     console.log(`true`);
// } else {
//     console.log(`false`);
// }