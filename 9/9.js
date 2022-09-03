// 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// массива равна 0, то вывести ‘Массив пуст’. filter

// let arr = []

// let i = 0
// while (i < 5) {
//     arr.push(prompt(`enter your value`))
//     i++
// }

// let arr_res = arr.filter((elem) => !isNaN(elem))
// console.log(arr_res.lenght === 0 ? `пустой массив` : arr_res);

// 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// 5 первыми значениями массив. Далее необходимо создать массив из тех
// значений, которые являются числами и НЕ равны 2 другим введенным. Если
// длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента. forEach

// let arr = []
// let arr2 = []
// let i = 0
// while (i < 7) {
//     if (i < 5) {
//         let input = prompt(`enter your value`)
//         if (!isNaN(input)) {
//             arr.push(input)
//         }
//     } else {
//         let input = prompt(`enter your value`)
//         if (!isNaN(input)) {
//             arr2.push(input)
//         }
//     }
//     i++
// }

// const arr_res = []

// arr.forEach(element => {
//     if (!arr2.includes(element)) {
//         arr_res.push(element);
//     }
// });

// console.log(arr_res);

// 3. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// только чисел после каждого введенного элемента.
// 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

// let a = +prompt(`qty`)
// let arr = [].sort()
// let i = 0

// while (i < a) {
//     arr.push(prompt(`enter your value`))
//     i++
// }
// let arr_res=[].sort()
// arr.forEach(elem=>{
//     if(!arr_res.includes(elem)){
//         arr_res.push(elem)
//     }
// })

// console.log(arr_res);

// 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

// let arr = []

// let i = 0
// let lenght = 5
// while (i < lenght) {
//     arr.push(prompt(`enter your value`))
//     i++
// }

// 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false. forEach

// let arr = [].sort()
// let arr2 = [].sort()
// i = 0
// while (i < 10) {
//     if (i < 5) {
//         arr.push(prompt(`enter your value`))
//     } else {
//         arr2.push(prompt(`enter your value`))
//     }
//     i++
// }
// res=0
// arr.forEach(element => {
//     if(arr2.includes(element)){
//         res+=1
//     }
// });
// console.log(res===5?true:false);

// 6. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

// let n = 5
// let arr = []
// let i = 0
// while (i < n) {
//     arr.push(prompt(`enter your value`))
//     i++
// }

// arr.forEach(element => {
//     if (!isNaN(element)) {
//         console.log(true);
//     }
// });

// 7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

// let arr = [`hschool`, `hschool_0`, `hschool_1`]

// let res_1 = arr[0]//lastindex
// let res_2 = arr[arr.length - 1]

// 8. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

// let n = 5
// let arr = []
// let i = 0
// while (i < n) {
//     arr.push(prompt(`enter your value`))
//     i++
// }
// let res = 0
// arr.forEach(element => {
//     if (isNaN(element)) {
//         res += 1
//     }

// });
// console.log(res === 5 ? true : false);

// 9. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

// let n = 5
// let arr = []
// let i = 0
// while (i < n) {
//     arr.push(prompt(`enter your value`))
//     i++
// }

// let arr_res = arr.reduce(function (sum, elem) {
//     return +sum + +elem
// }, 0)
// console.log(arr_res);

// 10. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

// let n = 5
// let arr = []
// let i = 0
// while (i < n) {
//     arr.push(prompt(`enter your value`))
//     i++
// }
// let arr_res = arr.map(function (elem) {
//     if (elem % 2 == 0) {
//         return `четное`
//     } else {
//         return `нечетное`
//     }
// })
// console.log(arr_res);


// 16. *На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n.
// Необходимо разбить данный одномерный массив на маленькие массивы в
// зависимости от того, какого число ввел пользователь. Добавить проверки на ввод
// числа (значение n не должно быть больше длины массива, 0, пустая строка,
// строковый тип данных). Использовать любой цикл / метод перебора массива
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]


// let massive_size = +prompt(`enter your value`)
// let submassive_size = +prompt(`enter your value`)
// submassive_size > massive_size ? prompt(`введите число меньше длины массива`) : console.log(submassive_size);
// let arr = []

// for (let i = 0; i < massive_size; i++) {
//     arr.push(prompt(`enter your value`))
// }

// let new_arr = Array(Math.ceil(massive_size / submassive_size))
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = []
// }

// for (i = 0; i < Math.ceil(massive_size / submassive_size); i++) {
//     new_arr[i] = arr.slice((i * submassive_size), (i * submassive_size) + submassive_size)
// }
// console.log(new_arr);

// 11. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

// let n = +prompt(`enter qty elements`)

// let arr = Array(n)

// for (let i = 0; i < arr.length; i++) {
//     let input = prompt(`enter your value`)
//     if (!isNaN(input)) {
//         arr[i] = input
//     } else {
//         alert(`ENTER ONLY VALUE`)
//         input = prompt(`enter your value`)
//         arr[i] = input
//     }
// }

// let result = arr.reduce(function (sum, elem) {
//     return sum * elem
// }, 1)

// console.log(result);

// 12. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter

// let n = prompt(`enter your value`)

// while (isNaN(n)) {
//     alert(`enter ONLY value`)
//     n = prompt(`enter your value`)
// }

// let arr = []

// for (let i = 0; i < n; i++) {
//     let text = prompt(`enter your text`)
//     while (!isNaN(text)) {
//         alert(`enter ONLY text`)
//         text = prompt(`enter your text`)
//     }
//     arr[i] = text
// }

// let new_arr = arr.filter(function (elem) {
//     if (elem[0].toLowerCase() === `a` || elem[0].toLowerCase() === `h`) {
//         return true
//     }
// })

// console.log(new_arr);

// 13. На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичный массив данных
// [“javascript”, “c#”, “c”, “java”]. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значения статичного массива.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

// let n = prompt(`enter your value`)

// while (isNaN(n)) {
//     alert(`enter ONLY value`)
//     n = prompt(`enter your value`)
// }

// let static_arr = [`javascript`, `c#`, `c`, `java`]

// let arr = []

// for (let i = 0; i < n; i++) {
//     let text = prompt(`enter your text`)
//     while (!isNaN(text)) {
//         alert(`enter ONLY text`)
//         text = prompt(`enter your text`)
//     }
//     arr[i] = text
// }
// let arr_result = []
// arr.forEach(element => {
//     if (static_arr.includes(element)) {
//         arr_result.push(element)
//     }
// });

// console.log(arr_result);

// 14. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name
// [“hschool”, “company”] -> [“#hschool”, “#company”]

// let n = prompt(`enter your value`)

// while (isNaN(n)) {
//     alert(`enter ONLY value`)
//     n = prompt(`enter your value`)
// }

// let arr = []

// for (let i = 0; i < n; i++) {
//     let text = prompt(`enter your text`)
//     while (!isNaN(text)) {
//         alert(`enter ONLY text`)
//         text = prompt(`enter your text`)
//     }
//     arr[i] = text
// }
// let arr_result=arr.map(function(elem){
//     return `#`+elem
// })
// console.log(arr_result);

// 15. Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread, rest

// let a = []
// let b = []
// for (let i = 0; i < 6; i++) {
//     let input = prompt(`enter your value`)
//     if (i < 3) {
//         a.push(input)
//     } else {
//         b.push(input)
//     }
// }
// let arr_result = [...a, ...b]
// console.log(arr_result);

// 17. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и
// второй массив, соответственно, с числами. forEach

// let n = prompt(`enter your value`)

// while (isNaN(n)) {
//     alert(`enter ONLY value`)
//     n = prompt(`enter your value`)
// }

// let arr = []

// for (let i = 0; i < n; i++) {
//     arr.push(prompt(`enter your value`))
// }
// let num_arr = []
// let str_arr = []

// arr.forEach(element => {
//     if (isNaN(element)) {
//         str_arr.push(element)
//     } else {
//         num_arr.push(element)
//     }
// });
// console.log(str_arr, num_arr);

// 18. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

// let n = prompt(`enter your value`)

// while (isNaN(n)) {
//     alert(`enter ONLY value`)
//     n = prompt(`enter your value`)
// }

// let arr = []

// for (let i = 0; i < n; i++) {
//     let num = prompt(`enter your number`)
//     while (isNaN(num)) {
//         alert(`enter ONLY number`)
//         num = prompt(`enter your number`)
//     }
//     arr[i] = num
// }

// let arr_result=arr.map(function(elem){
//     return elem**2
// })

// console.log(arr_result);

// 19. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

let n = prompt(`enter your value`)

while (isNaN(n)) {
    alert(`enter ONLY value`)
    n = prompt(`enter your value`)
}

function massive(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        let num = prompt(`enter your number`)
        while (isNaN(num)) {
            alert(`enter ONLY number`)
            num = prompt(`enter your number`)
        }
        result[i] = num
    }
    return result
}

let arr = massive(n)

function isNull(number) {
    return number == 0
}
let res = 0

if (arr.some(isNull)) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            res += +arr[i]
        }
    }
} else {
    while (arr.some(isNull) != true) {
        alert(`в массиве должен быть 0`)
        massive(n)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            res += +arr[i]
        }
    }

}
console.log(res);