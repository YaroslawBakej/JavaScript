// 1. На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение
// const num = +prompt(`enter your value`)
// function checkNum(x) {
//     try {
//         if (!isNaN(x) && x % 2 != 0) throw new Error(`не четное либо строка`)
//         return x
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// console.log(checkNum(num));
// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.
// const arr = [1, 2, 3, `text`, 4, 5]
// function checkArr(x) {
//     try {
//         let bool = x.every(el => !isNaN(el))
//         if (!bool) {
//             throw new Error(`одно значнеие не число`)
//         } return x
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkArr(arr));
// 3. Дан массив чисел внутри строки. Необходимо строку преобразовать в массив
// используя JSON.parse. Если же после того как вы спарсили данные у вас не
// массив, то бросить исключение. Добавить проверку на числа. Далее вывести
// только те числа, которые кратны 3
// const json = `[
//     { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3}
//     ]`

// let parsedData = JSON.parse(json)

// function findPriority(arr) {
//     try {
//         if (checkNum(arr)) {
//             let newarr = arr.filter(el => el.priority % 3 == 0)
//             if (newarr.length == 0) throw new Error(`нет кратных чисел`)
//             return newarr
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// function checkNum(arr) {
//     let countError = 0
//     arr.forEach(el => isNaN(el.priority) ? countError++ : true)
//     if (countError > 0) throw new Error(`приоритет не число`)
//     return true
// }
// console.log(findPriority(parsedData));
// 4. Дана строка массива. Необходимо спарсить строку и преобразовать в массив.
// Если же после того как вы спарсили данные у вас не массив, то бросить
// исключение. Далее вывести
// те элементы массива,
// в котрых id – четное
// значение
// const json = `[
//     { "id": 1, "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 2, "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
//     { "id": 3, "label": "SQL", "category": "programmingLanguages", "priority": 2 },
//     { "id": 4, "label": "Java", "category": "programmingLanguages", "priority": 3 },
//     { "id": 5, "label": "GO", "category": "programmingLanguages", "priority": 3}
//     ]`

// let parsedData = JSON.parse(json)

// function checkNum(arr) {
//     if (!Array.isArray(arr)) throw new Error(`приоритет не число`)
//     const newArr = arr.some(el => isNaN(el.id))
//     if (newArr) throw new Error(`тут есть строки`)
//     return true
// }
// function checkArr(arr) {
//     try {
//         if (checkNum) {
//             newarr = arr.filter(el => el.id % 2 == 0)
//             if (newarr.length == 0) throw new Error(`нет четных id`)
//             return newarr
//         }
//     } catch (error) {
//        error.message
//     }
// }
// console.log(checkArr(parsedData));

// На вход подается число n – количество элементов массива. Необходимо заполнить массив случайными элементами.
//  Если значение массива находится в диапазоне 10<n< 100, то занести в новый массив.
//   Добавить проверки и обработать их. Обратите внимание, тут как минимум 3 функции. 
//   Первая: формирование массива. Вторая: валидация. Третья: основная логика задачи

// const n = prompt(`enter qty of elem`)
// function arrPush(n) {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }

// function checkArr(arr) {
//     if (!Array.isArray(arr)) throw new Error(`не массив`)
//     if (arr.some(el => isNaN(el))) throw new Error(`в массиве есть строки`)
//     if (arr.some(el => el < 0)) throw new Error(`в массиве отрицательные числа`)
//     return true
// }

// function doNewArr(arr) {
//     try {
//         if (checkArr(arr)) {
//             const newarr = arr.filter(el => el >= 10 && el < 100)
//             if (newarr.length == 0) throw new Error(`нет подходящих элементов`)
//             return newarr
//         }
//     } catch (error) {
//         return error.message
//     }

// }
// const randomArray = arrPush(n)

// console.log(doNewArr(randomArray));

// 6. Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует.

// function sideOfTriangle() {
//     let arr = []
//     for (let i = 0; i < 3; i++) {
//         arr.push(+prompt(`enter side of a triangle`))
//     }
//     return true
//     // try {
//     //     if (!arr.every(el => !isNaN(el))) throw new Error (`введите только числа`)
//     //     return arr
//     // } catch (error) {
//     //     return error.message
//     // }

// }
// function checkTriangle(arr) {
//     try {
//         if (!arr.every(el => !isNaN(el))) throw new Error(`введите только числа`)
//         if (arr[0] >= arr[1] + arr[2] || arr[1] >= arr[0] + arr[2] || arr[2] >= arr[0] + arr[1]) throw new Error(`невозможно выполнить условие по заданным размерам`)
//         return true
//     } catch (error) {
//         return error.message
//     }

// }
// // console.log(sideOfTriangle());
// console.log(checkTriangle(sideOfTriangle()));

// 7. Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181 (92 === 81, 12=== 1)

// let value = prompt(`enter your value`).split(``)

// function sqrtEveryNum(arr) {
//     try {
//         if (arr.some(el => isNaN(el))) throw new Error(`введены не только числа`)
//         return arr.map(el => el ** 2).join(``)
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(sqrtEveryNum(value));

// 8. Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

// let alphavit = `abcdefghijklmnopqrstuvwxyz`.split(``)
// let str = `oqrs`.split(``)

// function findStartSearch(arr, arr2) {
//     let start = arr2.indexOf(arr[0])
//     let newarr =arr2.slice(start)
//     return newarr
// } 

// function checkstr(arr) {
//     let checkarr = arr.some(el => !isNaN(el))
//     if (checkarr) throw new Error(`в строке есть числа`)
//     return true
// }

// function alertElem(arr, arr2) {
//     try {
//         if (checkstr(arr)) {

//             for (let i=0; i < arr.length; i++) {
//                 if (arr[i] !== arr2[i]) {
//                     return arr2[i]
//                 }
//             }
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(alertElem(str,findStartSearch(str, alphavit)))

// 9. Мальчик идет долгим путем со школы домой. Чтобы сделать прогулку веселее, он
// складывает все номера домов, мимо которых проходит. К сожалению, не на всех
// домах написаны номера, к тому же мальчик регулярно меняет улицы по очереди,
// поэтому номера не представляются ему в определенном порядке.
// В какой-то момент во время прогулки мальчик встречает дом с написанным на
// нем 0 номером. Это настолько его удивляет, что он перестает прибавлять числа к
// своей сумме сразу после того, как видит этот дом.
// Для заданной последовательности домов определите сумму, которую получит
// мальчик. Гарантируется, что на пути всегда будет хотя бы один нулевой дом.
// Добавить проверку, что номера домов – только числа.
// [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

// let arr = [5, 1, 2, 3, 0, 1, 5, 0, 2]

// function gotNewArr(arr) {
//     let stop = arr.indexOf(0)
//     let newarr = arr.slice(0, stop)
//     return newarr
// }
// function checkArr(arr) {
//     if (arr.some(el => isNaN(el))) throw new Error(`на домах вместо номеров буквы`)
//     return true
// }
// function sumValues(arr) {
//     try {
//         if (checkArr(gotNewArr(arr))) {
//             return arr.reduce((num, sum) => num + sum, 0)
//         }
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(sumValues(gotNewArr(arr)));

// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

// let email = `jarobak1995gmail.com`

// function checkMail(mail){
//     try {
//         if(!mail.includes(`@`)) throw new Error(`в указанной строке нету "@"`)
//         return true
//     } catch (error) {
//         return error.message
//     }
// }
// console.log(checkMail(email));