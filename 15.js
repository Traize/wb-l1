// Такая же реализация как в 7 задании, если нужно выводить результат выполнения последовательно


funcArray = [f1, f3, f4, f2, f5]
//Функция вызывающая переданные ей функции 
async function asyncSeriesExecuter(arrs) {

    // итерация по массиву функций
    for (let arr of arrs) {

        //Вывод в логе результат выполнения функции и время когда она была выполнена
        console.log(await arr(), Date());
    }
}

asyncSeriesExecuter(funcArray)


// Если нужно вывести результат после того как все функции отработают

async function asyncExecuterPromiseAll(arr) {
    //Дожтдается выполнения всех переданных функций и записывается их в массив
    //Promise.all вернет результат выполнения всех функции
    const results = await Promise.all(arr.map(f => f()))
    console.log(results, Date())
}

asyncExecuterPromiseAll(funcArray)












function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 1"), 1000)
    })

}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 2"), 1500)
    })

}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 3"), 2000)
    })

}
function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 4"), 300)
    })

}
function f5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 5"), 1500)
    })

}