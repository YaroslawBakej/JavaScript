// const obj = {}

// obj.id = 1;
// obj.name = `udemy`;
// obj.name = `hschool`;
// delete obj.name

// const obj = { a: 1, 10: `kjgr`, c: 2, 3: `kjeg` }

// for (const elem in obj) {
//     if (!isNaN(elem)) {
//         console.log(elem);
//     }
// }


// const obj = { a: 1, 10: `kjgr`, c: 2, 3: `kjeg` }

// for (const elem in obj) {
//     if (!isNaN(obj[elem])) {
//         console.log(obj[elem]);
//     }
// }


// const obj = { a: 1, b: 2, c: 3, d: 4 }

// for (const elem in obj) {
//     if (obj[elem]%2===0) {
//         console.log(obj[elem]);
//     }
// }

// const obj = { 1: 1, 2: 2, 3: 3, 4: 4 }
// let arr = []
// for (const elem in obj) {
//     if (elem % 2 != 0) {
//         arr.push(elem)
//     }
// }

// const obj = { a: 1, b: 2, c: 3, d: 4 }
// let arr = []
// for (const elem in obj) {
//     arr.push(obj[elem] * 2)
// }
// console.log(arr);

// const obj = {}
// let qty_of_key = ``
// for (const elem in obj) {
//     qty_of_key = key
// }
// console.log(!qty_of_key ? false : true);

// const obj = { }
// let qty_of_pair = 0
// for (const elem in obj) {
//     if (obj[elem]) {
//         qty_of_pair += 1
//     }
// }
// console.log(qty_of_pair);

// const obj = { a: 1, b: 2, c: 3, d: 4 }
// let qty_of_pair = 0
// for (const elem in obj) {
//     if (!isNaN(obj[elem])) {
//         qty_of_pair += 1
//     }
// }
// console.log(qty_of_pair);

// const obj = { name: ``, age: ``, birthday: `` }

// for (const elem in obj) {
//     obj[elem] = prompt(`enter your ${elem}`).trim()
//     while (obj[elem] == ``) {
//         obj[elem] = prompt(`enter your ${elem}`).trim()
//     }
// }
// console.log(obj);


// 13. На входе пустой объект; n – количество элементов рандомно сгенерированного
// массива. Необходимо заполнить пустой объект, где ключи – циклично
// сгенерированная последовательность от 0 до n, значения – элемент рандомно
// сгенерированного массива. Math.random()

// let obj = {}
// let n = +prompt(`enter your value`)
// for (let i = 1; i <= n; i++) {
//     obj[i] = (Math.floor(Math.random() * 11))
// }
// console.log(obj);

// 14. На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения

// let obj = { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2, 6: 4, 7: 4, 8: 4, 9: 5, }

// const values_obj = Object.values(obj).sort()
// for (let i = 0; i < values_obj.length; i++) {
//     if (values_obj[i] != values_obj[i + 1] && values_obj[i] != values_obj[i - 1]) {
//         obj[i + 1] = values_obj[i]
//     } else {
//         delete obj[i + 1]
//     }
// }
// console.log(obj);

// 15. На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное

// let n = +prompt(`enter qty of elements`)
// let obj = {}
// for (let i = 0; i < n; i++) {
//     let q = (Math.floor(Math.random() * n))
//     q % 2 == 0 ? obj[q] = true : obj[q] = false
// }
// console.log(obj);

// 16. На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

// let obj = {}
// let n = +prompt(`enter qty of elements`)
// for (let i = 1; i <= n; i++) {
//     obj[i] = +prompt(`enter your value`)
// }
// const obj_values = Object.values(obj)
// console.log(obj_values);

let bd = [{ "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
{ "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
{ "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
{ "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }]

function create(o) {
    o.id = o.label.toLowerCase();
    const exist = !!bd.find(b => b.label === o.label); 
    if (exist) return;

    bd.push(o)
}

function update(o) {
    let a = bd.find(b => b.id === o.id);
    Object.keys(a).forEach(key => {
        if (key in o) {
            a[key] = o[key]
        }
    })
}

function del(o) {
    bd = bd.filter(b => b.id !== o.label.toLowerCase())
}

console.log(create(bd));

