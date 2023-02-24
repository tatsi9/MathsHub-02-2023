const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {

    const symbol = (Math.random() > 0.5) ? "+" : "-"
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

// btnGame.onclick = () => {
//     if (!gameState.taskInProcess) {
//         title.innerText = "Игра началась!"
//         userAnswer.value = null
//         // генерируем задачу и ответ
//         // показываю задачу пользователю
//         userTask.innerText = getTask()
//         userAnswer.hidden = false 
//         btnGame.innerText = "Проверить!"
//         // gameState.taskInProcess = true
//         toggleGameState()
//         // меняю кнопку 
//         // меняю состояние
//     } else {
//         // сравнить ответ пользователя с правильным
//         const isRight = gameState.rightAnswer == userAnswer.value
//         // вывести результат
//         userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
//         // вывести поздравления 
//         title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
//         // поменять кнопку и состояние
//         // gameState.taskInProcess = false 
//     }
//     toggleGameState()
//     btnGame.innerText = (gameState.taskInProсess) ? "Проверить!" : "Начать заново!"
// }

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        // генерируем задачу и ответ
        // показываю задачу пользователю
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        gameState.taskInProcess = true
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
        // gameState.taskInProcess = false 
    }
    toggleGameState()
    btnGame.innerText = (gameState.taskInProcess) ? "Проверить!" : "Начать заново!"
}

btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})


//console.log(document) // показывает html-структуру проекта (index.html)
//console.dir(document)   // показывает свойства и методы объекта
// const chosenEl = document.querySelector(".my_game")      // querySelector - находит ПЕРВЫЙ элемент с классом .my_game - 1 элемент
// const chosenEl = document.querySelectorAll(".my_game")   // querySelectorAll - находит ВСЕ элементы с классом .my_game - коллекция элементов (массив)
//const anyValue = document.getElementById("dsd").children

const chosenEl = document.querySelectorAll(".chosen_block-container > div")    // находит элемент <p> внутри элемента с id="my game"
const counterEl = document.querySelector(".chosen_block span")

const chosenState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }

}
const changeCount = (value) => {
    chosenState.countElements += value
    //chosenState.countElements = chosenState.countElements + value
    counterEl.innerText = chosenState.countEl
}

const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "chosen_element"
        chosenState.setCountValue(1)
    } else {
        e.target.className = ""
        chosenState.setCountValue(-1)
    }
}

for (let i = 0; i < chosenEl.length; i++) {
    chosenEl[i].addEventListener("click", eventFunc)
}
// chosenEl[2].removeEventListener("click",eventFunc)


// for (let i = 0; i < chosenEl.length; i++) {
//     chosenEl[i].addEventListener("click", (e) => {
//         //выбрать элемент, т.е. выделить его с помощью класса
//         // chosenEl[i].className = "chosen_element"
//         //запустить счетчик
//         if (e.target.className === "") {
//             e.target.className = "chosen_element"
//             changeCount(1)
//         } else {
//             e.target.className = ""
//             changeCount(-1)
//         }
//     })
// }

// const timeIsOver = () => {
//     alert("Время вышло!")
// }
// setTimeout(timeIsOver,2000)

// setTimeout(() => {
//     alert("Время вышло!")
// }, 2000)

// const alarm = setInterval(timeIsOver,3000) 


// БУДИЛЬНИК // СДЕЛАТЬ ПЕРЕРЫВ?
// const alarm =  setInterval(() => {
//     let wantToSleep = confirm("Хотите ли Вы спать?")
//     if(wantToSleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)

// Сначала выполняются линейные функции, а потом асинхронные - в консоли будет 1, 3, 2
// console.log("1")
// setTimeout(()=> {
//     console.log("2")
// }, 0)         //асинхронная функция
// console.log("3")


const postsBlock = document.querySelector(".posts_block-container")
const showPostsBTN = document.querySelector(".posts_block button")


// const postTitle = document.querySelector(".posts_block-container h3")
// const postBody = document.querySelector(".posts_block-container span")

// РАЗНЫЕ ЗАПИСИ ОДНОЙ ФУНКЦИИ
// const func = () => {                           // то же, что и const func = () => 5
//     return 5
// }

// ПЕРЕНЕСЕМ ЭТОТ БЛОК ВНУТРЬ ФУНКЦИИ getPOsts()

// fetch("https://jsonplaceholder.typicode.com/posts")
//     // .then((response) => {
//     //     return response.json()   //превращает json-строку в объект
//     // })                           
//     .then(response => response.json()) // преобразовали функцию выше - в стрелочную функцию
//     .then(data => {
//         for (el of data) {
//             addPost(el.title, el.body)
//         }
//         // addPost(data[7].title, data[7].body)
//     })
//     // .catch((err) => {
//     //     //  console.log(err)
//     //     console.log(err.message)
//     // } )                         
//     .catch(err => console.log(err.message))  // преобразовали функцию выше - в стрелочную функцию


function addPost(title, body) {
    const postTitle = document.createElement("h3")
    const postBody = document.createElement("span")
    const postItem = document.createElement("p")

    postItem.append(postTitle, postBody)
    postsBlock.append(postItem)

    postTitle.innerText = title
    postBody.innerText = body
}

function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")                         
    .then(response => response.json())
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)
        }
    })                   
    .catch(err => console.log(err.message))
}

getPosts()
// showPostsBTN.onclick = () => {getPosts()}


// function createPost(title, body, userId) {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//             // title: title,
//             // body: body,
//             // userId: userId,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//     })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => console.log(err.message))
// }
// createPost("title", "body", 15)