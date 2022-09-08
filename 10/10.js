// let n = +prompt(`enter qty of elements`)
// let arr = []
// for (let i = 0; i < n; i++) {
//     let a = +prompt(`enter value`)
//     arr.push(a)
// }
// let res = arr.reduce((sum, elem) => {
//     return sum + elem
// }, 0)

// let n = +prompt(`enter qty of elements`)
// let arr = []
// for (let i = 0; i < n; i++) {
//     let a = +prompt(`enter value`)
//     arr.push(a)
// }
// let a = arr[0]
// arr.forEach(element => {
//     if (element > a) {
//         a = element
//     }
//     return a
// });

// console.log(a);

// let n = +prompt(`enter qty of elements`)
// let arr = []
// for (let i = 0; i < n; i++) {
//     let a = +prompt(`enter value`)
//     arr.push(a)
// }
// let a = arr[0]
// let b = arr[0]

// arr.forEach(element => {
//     if (element > a) {
//         a = element
//     } else if (element < b) {
//         b = element
//     }
//     return a, b
// });

// console.log(a,b);

// let a = prompt(`enter your string`)
// let b = prompt(`enter your string`)
// let res =``
// if (a.length == b.length) {
//     let res = 0
//     for (let i = b.length - 1; i >= 0; i--) {
//         res += b[i]

//     }
// }
// console.log(a, res);

// let n = +prompt(`enter qty element`)
// let arr = []
// for (let i = 0; i < n; i++) {
//     let res = prompt(``)
//     arr.push(res)
// }

// let res = arr.filter(function (elem) {
//     if (elem == `a` || elem == `e` || elem == `y` || elem == `u` || elem == `u` || elem == `o`) {
//         return elem
//     }
// })

// console.log(res);

// 6. Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach

// let str = prompt(`enter your text`).toLowerCase().split(``)

// let arr = [`q`, `w`, `r`, `t`, `p`, `s`, `d`, `f`, `g`, `h`, `j`, `k`, `l`, `z`, `x`, `c`, `v`, `b`, `n`, `m`]
// let result = 0
// str.forEach(element => {
//     if (arr.includes(element)) {
//         result += 1
//     }
// });

// console.log(result);

// 7. Найти значение массива, повторяющееся в нем наибольшее количество раз

// let n = prompt(`enter your value`)
// let arr = []
// for (let i = 0; i < n; i++) {
//     let num = prompt(`enter your value`)
//     arr[i] = num
// }

// function how_qty(arr, number) {
//     return arr.filter(i => i == number).length
// }

// let res = 0
// for (let i = 0; i < arr.length; i++) {
//     if (how_qty(arr, arr[i]) > res) {
//         res = arr[i]
//     }
// }
// console.log(res);

// 8. На вход программе подается строка текста содержащая «@». Разбить на массив.
// Напишите программу, которая удаляет все вхождения символа «@». Как вы
// думаете, что здесь применить: map, forEach, filter?
// 123@1@@34 -> 123134

// let str = `123@1@@34`.split(``)

// let arr_res = str.filter(elem => elem != `@`)

// console.log(arr_res);

// 9. На вход программе подается строка текста, вида “xxxx-xx-xx”. Разбить на массив.
// Преобразуйте эту дату в формат “xx/xx/xxxx”. Как вы думаете, что здесь применить:
// map, forEach, filter?

// let str = `xxxx-xx-xx`.split(`-`).reverse()
// let res_arr = []
// str.forEach(element => {
//     res_arr.push(element + `/`)
// });
// console.log(res_arr.join(``));

// 13.



