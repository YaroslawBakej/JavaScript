// 1. На входе строка, необходимо убрать все личшние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на
// ввод только текстовых значений

// let a = ` QwE qwe`.toLowerCase().trim()

// if(isNaN(a)){
//     console.log(a.repeat(3));
// }else{
//     console.log(`непраильный ввод`);
// }

// 2. На вход подается строка из 2 и более слов. Необходимо добавить тире между
// словами

// let a = ` qwe qwe`.trim().replaceAll(` `, `-`)
// console.log(a);

// 3. На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

// let a=`qwe qwerty`
// //  if(a.includes(`qwerty`)){
// //     console.log(`true`);
// //  }else{
// //     console.log(`false`);
// //  }
// console.log(a.includes(`qwerty`));

// 4. На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку
// вывести true, в противном случае false

// let a=`qwe qwe`.split(` `)
// let b=`qwe`.split(` `)

// console.log(a[a.length-1]==b[0]?`true`:`false`);

// 5. На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false

// let a=`qwerty`.trim().toLowerCase()
// let b=`qwer2`.trim().toLowerCase()
// console.log(a===b&&isNaN(a,b)?`true`:`false`);

// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/


// let a=`https://www.instagram.com/hschool.official/`

// console.log(a.slice(a.indexOf(`www`)));

// 7. На вход подается строка '/home/user/dir/file.txt'. Необходимо вернуть имя файла
// (подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')

// let a = `'/home/user/dir/file.txt'`.split(`/`)

// console.log(a[a.length - 1]);

// 8. На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

// let a=`hSСhOol`.toLowerCase().trim()

// console.log(`#`+`${a}`);

// 1. На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

// let a = `hSСhOol СomPAnY`.toLowerCase().split(` `).join(``)

// if (isNaN(a)) {
//     console.log(`#` + `${a}`);
// }

// 2. На вход подается число произвольной длины. Необходимо обратиться к каждому
// значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 7 -> 7 – неч
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет

// let a = `1234`
// for (i = 0; i < a.length; i++) {
//     if (+a[i] % 2 && a[i] != 0) {
//         console.log(`четное`);
//     } else if (+a[i] != 0) {
//         console.log(`нечетное`);
//     } else {
//         console.log(`ноль`);
//     }
// }



