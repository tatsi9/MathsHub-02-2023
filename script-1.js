// var c = 15
// let a = 7
// const = 8


//STRING

// const str1 = 'I\'m OK'
// const str2 = 'Саша \nсказал: \"Привет"'
// const str3 = `I say ${str1}`

// console.log(str1)
// console.log(str2)
// console.log(str3)


// NUMBER

// + - * / **
// const num1 = 75 + 15// 
// const num2 = 79 **3

// const rem = 7 + 8 + "5" //конкатенация

// const rem  8 * "a"
// Nan - not a number

// const inf = 17 / 0 // 17 / 0 = Infinity
// console.log(rem)
// alert(num2)

// от -(2**53 -1) до (2**53 - 1)
// console.log(99999999999999999)  // 100000000000000000
// console.log(999999999999999999999999)  // 1e+24 - переводится в сокращенную запись

// BIGINT

// const bigInt = 103123123256533n // 103123123256533n - в консоли выводится полностью
// console.log(bigInt)


// BOOLEAN

//true / false
//> < >= <= >= <== == ===

//const bool = 10 > 5
//const bool = "a" > "AAAA" // true
//const bool = "a" > "8" // true
//console.log(bool)

// NULL

// let empty = null
// console.log(empty, typeof empty) // null 'object'

// UNDEFINED

// let box = undefined
// console.log(box, typeof box) // undefined 'undefined'

//SYMBOL

// const uniq = Symbol('id') // Symbol(id)
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2) // false

//OBJECT - набор пар "ключ: значение"

// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }

// console.log(obj) //{name: 'Sasha', age: 19, isHappy: true}
// console.log(obj.name) // Sasha
// console.log(obj['name']) // Sasha

// obj.job = "Google"
// console.log(obj) //{name: 'Sasha', age: 19, isHappy: true, job: 'Google'}


// const array = ["Аня", 18, false]
// console.log(array) // (3) ['Аня', 18, false]

// array[3] = "Facebook"

// console.log(array) // (3) ['Аня', 18, false, 'Facebook']

                    // 0: "Аня"
                    // 1: 18
                    // 2: false
                    // 3: "Facebook"
                    // length: 4
                    // console.log(array[0]) // Аня


//const variant = "option1"

// console.log (5 == "5") // true -------- число + строка = всегда строка 
// //console.log ("5" == "5") // true 
// console.log (5 === "5") // false - сравнение ПО ТИПУ ----------- не приводит к одному ТИПУ, а просто сравнивает

//console.log ("abc" > 15)

// NULL

// console.log (null == 0) // false
// console.log (null > 0) // false
// console.log (null < 0) // false
// console.log (null >= 0) // !!!!!!!!! true - не БАГ, а ФИЧА
// console.log (null <= 0) // !!!!!!!!! true - не БАГ, а ФИЧА

// UNDEFINED

// console.log (undefined == 0) // false
// console.log (undefined <= 0) // false
// console.log (undefined >= 0) // false

// console.log (undefined == null) // true - приводятся к булевому типу - undefined (==false) == null (==false) =>  false == false
// console.log (undefined === null) // false - по типу 


// STRING

// console.log (typeof ("15")) // string
// console.log (typeof Number("15")) // number
// console.log (typeof +("15")) // number - унарный оператор
// console.log (+"abc")// NaN
// String(15) // '15' (строка)
// 15 + "" // '15' (строка)

// BOOLEAN 

// console.log (Boolean(15)) // true  - ! Любое число (положит. и отрицат. - это true)
// console.log (Boolean(-15)) // true - ! Любое число (положит. и отрицат. - это true)

// console.log (Boolean(0)) // false - ноль
// console.log (Boolean("")) // false - пустая строка

// console.log (Boolean(" ")) // true - строка - пробел
// console.log (Boolean("qwe")) // true - строка

// ! ОТРИЦАНИЕ - 

// !true // false
// !!true // true

// !"qwer" // false -------"qwer" == true, значит !"qwer" == false


// const go = true 
// if (go) {
//     alert ("побежали")
// }                      // модальное окно с текстом "побежали"



// const go = false 
// if (go) {
//     alert ("побежали")
// }
// else {
//     alert ("стоим")
// }                         // модальное окно с текстом "стоим"        


// const go = confirm ("Будем ли мы бегать?") // модальное окно с текстом "Будем ли мы бегать?"    
// if (go) {
//     alert ("побежали")                 // если нажали "ОК"
// }
// else {
//     alert ("стоим")                   // если нажали "Отмена"
// }         


// const go = prompt ("Куда мы побежим?", "домой") // модальное окно с текстом "Будем ли мы бегать?"    
// if (go) {
//     alert ("побежали")                 // если нажали "ОК"
// }
// else {
//     alert ("стоим")                   // если нажали "Отмена" или оставили пустую строку
// }      

// const userName = prompt ("Who you are?", "anonym") // модальное окно с текстом "Будем ли мы бегать?"    

// if (userName === "admin") {
//     alert ("Hello, boss!")                 // если ввели "admin"
// } else if (userName === "anonym") {        // если нажали "ОК"
//     alert ("I don't know you!")          // I don't know you!
// } else if (!userName) {            //  else if (userName == null)
//     alert ("You do not exist")           // если нажали "Отмена"
// }
// else {
//     alert (`Hi, ${userName}`)        // Hi, null // если нажали "Отмена" или оставили пустую строку
// }    


// ОПЕРАТОР ||

// "asd" || 0 // asd, так как "asd" - первое true 
//console.log("asd" || "asdsa") // asd - первое true 


// const userName = prompt ("Who you are?", "anonym") // модальное окно с текстом "Будем ли мы бегать?"    

// if (userName === "admin") {
//     alert ("Hello, boss!")                 // если ввели "admin"
// } else if (userName === "anonym" || !userName) { //если нажали "ок"
//     alert ("I don't know you!")          // I don't know you!
// } 
// else {
//     alert (`Hi, ${userName}`)        // Hi, null // если нажали "Отмена" или оставили пустую строку
// }    


// WHILE

// const counts = prompt ("До сколько Вы хотите досчитать?", 10)
// let i = 0 
// // while (i <= counts) {
// //     console.log(i++)
//     // i = i + 1
//     //i += 1
//     //i++
//     //console.log(++i) // 0,1,2,3,4,5,6,7,8,9,10
// // }
// do {
//     console.log (i++)
// } while (i <= counts)

// console.log(i)  // 0,1,2,3,4,5,6,7,8,9,10,11


// ЦИКЛ FOR

// const counts = prompt ("До сколько Вы хотите досчитать?", 10)
// let i = 0 

// for (let i = 1; i <= 50; ++i) {
//     console.log(i)
// }


// МАССИВ

// let arr = [4,5,6]
// console.log (arr[1]) // 5

// arr[3] = 7
// console.log (arr) // [4, 5, 6, 7]

// arr.push(7)
// console.log (arr) // (4) [4, 5, 6, 7]

// const arr = []

// for (let i = 1; i <= 50; ++i) {
//     arr.push(i)
// }
// console.log(arr) // (50) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

// arr[17] = "saamhvgsjy"
// console.log(arr)


// ОПЕРАТОР % (деление с остатком)

// 7 % 3 => 1 (остаток от деления нацело)

// const arr = []
// for ( elem of arr ) {
//     console.log(elem)
// }

// const newArr = []

// for ( elem of arr ) {
//     const marker = elem % 3 
//     if (!marker) {
//         newArr.push(elem)
//     }
// }
// console.log(newArr) // (16) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48]


// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronezh"
// }
// for (key in obj) {
//     console.log (key, obj[key])
// }
    


// ЗАДАЧА ИЗ ДЗ 3
// let count = 15
// let point = 5 
// while (count < 18) {
//     point = point + 3
//     count++
// }
// console.log(point) // 14

// ЗАДАЧА ИЗ дз 4

// let num = 17
// let str = "17"
// let empty = null
// if ( str - num ) {
//     console.log('first')
// } else if (empty - num) {
//     console.log("second")
// } else if (str - empty) {
//     console.log("third")
// } else {
//     console.log("no one")
// }


// FUNCTION

// declaration  - ! можно писать в любом месте кода. Прочитается и запустится все равно

// console.log(scream(15,10))

// function scream(a,b) {
// //    const result = a * b
// //    return result
// return a * b                // !все, что после "return" - игнорируется 
// alert("AAAAAA")             // это не выполняется
// }
// // scream()


// //expression - выражение

// const wowScream = function() {
//     alert("WOOOOOOOOW")
// }
// // wowScream()


// // arrow  - стрелочная функция

// const arrow = () => {
//     alert("arrow is in the sky")
// }
// // arrow()






// ИГРА
// 1. После нажатия на кнопку "Начать" игра запускается, генерируется задача, 
// пользователь может ввести ответ, должна появиться кнопка "Проверить"

// 2.При нажатии кнопки "Проверить" мы сравниваем ввод пользователя с ответом.
// Вывести результат и правильное значение, сменить кнопку на "Начать заново"




//const randomValue = (Math.random() * 100).toFixed(0) // округление до 0 знаков после запятой
// const randomValue1 = (Math.random() * 100).toFixed(0) // округление до 0 знаков после запятой
// const randomValue2 = (Math.random() * 100).toFixed(0) // округление до 0 знаков после запятой

// const isPlus = Math.round() > 0.5                    // если > 0.5, то + ; если < 0.5, то -

// // console.log(randomValue)                             // случайное число 


const getRandomNumInRange = (min,max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum 
}

const getTask = () => {
    // const randomNum1 = getRandomNumInRange(0, 100) 
    // const randomNum2 = getRandomNumInRange(0, 100)
    // let symbol
    // if (Math.random() > 0.5) {
    //         symbol  = "+"
    // } else {
    //         symbol = "-"
    // }

    const symbol = (Math.random() > 0.5) ? "+" : "-"   // if (Math.random() > 0.5) is true then do "+" 
                                                  // if (Math.random() > 0.5) is true then do "-"
 // const task = `${randomNum1} ${symbol} ${randomNum2}`
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    
    gameState.rightAnswer = eval(task)
    return task
}

// console.log(getTask())
// console.log(getTask())
// console.log(getTask())
// console.log(getTask())

// console.log(getRandomNumInRange(0,100)) 
// console.log(getRandomNumInRange(10,100)) 
// console.log(getRandomNumInRange(110,400)) 
// console.log(getRandomNumInRange(0,10000)) 

// const isPlus = Math.round() > 0.5   


const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
// console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

btnGame.onclick = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null

        // генерируем задачу и ответ
        // const task = getTask()

        // показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false 
        btnGame.innerText = "Проверить!"

        // gameState.taskInProcess = true
        toggleGameState()

        // меняю кнопку 

        // меняю состояние
    } else {
        // сравнить ответ пользователя с правильным
        const isRight = gameState.rightAnswer == userAnswer.value
        // вывести результат
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        // вывести поздравления 
        title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        // поменять кнопку и состояние
        btnGame.innerText = "Начать заново!"
        // gameState.taskInProgress = false 
        toggleGameState()
    }
}




// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// } else {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}`
// }














// alert('Hello!')

// confirm('Do you learn JS?')

// prompt('what language do you learn JS?', 'English')

// let a = 5
// const b = 12

// const span = document.getElementById('skill')

// console.log(span)
// console.log(span.innerText)

//const skill = document.getElementById('skill')
//const isLove = document.getElementById('isLove')

//const string = document.getElementById('string')



// const text = prompt('what language do you learn JS?', 'English')
// const skillText = prompt('what language do you learn JS?', 'English')

// const isLoveValue = confirm('Do you love JS?')
// console.log(isLoveValue)

// span.innerText = text
// skill.innerText = skillText
// isLove.innerText = isLoveValue

//string.innerHTML = 'str'

//const example = document.getElementById('example')

//console.log(example.innerHTML)
//console.log(example.innerText)



for(let i = 10; i < 35; i += 5) {

    console.log(i);

}