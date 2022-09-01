// . Выведите столбец чисел от 1 до 50. for, while

// let i = 0
// let a = []
// while (i <= 50) {
//     a.push(i)
//     i++
// }
// console.log(a);

// 2. [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами

// let a = [1, 2, 3, 4, 5]
// let i = 0
// while (i < a.length) {
//     console.log(a[i]);
//     i++
// }

// let a = [1, 2, 3, 4, 5]
// let i = 0

// do {
//     console.log(a[i]);
//     i++
// } while (i < a.length)

// let a = [1, 2, 3, 4, 5]

// for (const item of a) {
//     console.log(item);
// }

// 3. Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива

// let a = [2, 3, 4, 5]
// let i = 0
// while (i < a.length) {
//     res *= a[i]
//     i++
// }
// let res = 1

// let a = [2, 3, 4, 5]
// let res = 1

// for (let i of arr) {
//     res *= i
// }
// console.log(res);

// 4. Выведите столбец чисел от 11 до 33 циклом while

// let i = 11

// while (i <= 33) {
//     console.log(i);
//     i++
// }

// const a = 100

// for (let i = 0; i <= a; i++) {
//     if (i %= 0) {
//         console.log(i);
//     }
// }

// const a = 100

// let i = 0
// while (i < 100) {
//     if (i % 0) {
//         i++
//     }
// }

// let a = 100
// let i = 0
// let res = 0

// while (i <= a) {
//     res += i
//     i++
// }

// 7. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

// let value = 5
// let a = []

// for (let i = 0; i < value; i++) {
//     const pr = +prompt(`enter your value`)
//     a.push(pr)
// }

// let res = 0

// for (const item of a) {
//     res += item
// }
// console.log(res);

// 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort()
// let arrnew = []
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] != arr[i + 1]) {
//     arrnew.push(arr[i])
// }
// }
// console.log(arr);
// console.log(arrnew);

// 9. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

// let arr = [2, 5, 9, 15, 0, 4]

// for (const item of arr) {
//     if (item % 2 == 0) {
//         console.log(item);
//     }
// }

// 10. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
// значения массива -> [1, 5] (for)(while)(for of)

// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort()
// for (let i = 0; i < arr.length; i++) {

// }

// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5]

// for (const item of arr) {
//     if (item === 1 || item === 5) {
//         console.log(item);
//     }
// }

// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

// let arr = [1, 2, 3, `qwe`, `ewq`]

// let arrnumber = []
// for (const item of arr) {
//     if (isNaN(item)) {
//         continue
//     } else {
//         arrnumber.push(item)
//     }
// }

// console.log(arrnumber);

// 12. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 5 циклом while

// let arr = [2, 5, 9, 15, 0, 4]
// let i = 0

// while (i < arr.length) {
//     if (arr[i] % 5 == 0 && arr[i] != 0) {
//         console.log(arr[i]);
//     }
//     i++
// }

// 13. Дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму всех положительных элементов массива циклом for of

// let arr = [-1, 2, 3, 6, 2, -8, -11]
// let res = 0
// for (const item of arr) {
//     if (item > 0) {
//         res += item
//     }
// }
// console.log(res);

// 14. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

// let arr = [10, 20, 30, 50, 235, 3000]

// for (let i = 0; i < arr.length; i++) {
//     let number = arr[i].toString()
//     if (number[0] === 1 || number[0] == 2 || number[0] == 5) {
//         console.log(number);
//     }
// }

// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-‘

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = ``
// for (let i = 0; i < arr.length; i++) {
//     res += -arr[i].toString()
// }

// console.log(res);

// 16. Дано число 7, найдите все числа кратные 7 до 100

// let n = 7
// let i = 1
// let res = []
// while (i <= 100) {
//     if (i % 7 == 0) {
//         res.push(i)
//     }
//     i++
// }
// console.log(res);

// 17. Дано предложение и количество раз которое его надо повторить. Напишите
// программу, которая повторяет данное предложение нужное количество раз.

// let phrase = prompt(`your phrase`)
// let n = +prompt(`quantity`)
// let i = 0
// while (i < n) {
//     console.log(phrase);
//     i++
// }

// 18. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.

// let n = +prompt(`quantity`)
// let arr = []
// let i = 1

// while (i <= n) {
//     let mean = prompt(i + ` element`)
//     arr.push(mean)
//     i++
// }
// console.log(arr);

// 19. Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt. Проверить каждый
// prompt на число (ввод строки, проверка на isNaN)

// let n = +prompt(`quantity`)
// let arr = []
// let i = 1

// while (arr.length < n) {
//     let mean = prompt(arr.length + 1 + ` element`)
//     if (!isNaN(mean)) {
//         arr.push(mean)
//     } else {
//         alert(`It is not a Number`)
//     }
//     i++
// }
// console.log(arr);

// 20.Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

// let a = prompt(`enter your value`).split(``)
// let res = a[0]
// for (let i = 1; i < a.length; i++) {
//     a[i] = +a[i]
//     if (a[i] % 2 != 0 && a[i - 1] % 2 != 0) {
//         res += `:` + a[i]
//     } else {
//         res += a[i]
//     }
// }
// console.log(res);
