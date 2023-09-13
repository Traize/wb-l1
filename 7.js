function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 1"), 1000)
    })

}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 2"), 2000)
    })

}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 3"), 3000)
    })

}
function f4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 4"), 2000)
    })

}
function f5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Функция 5"), 1500)
    })

}

funcArray = [f1, f3, f4, f2, f5]
//Функция вызывающая другие функции после их выполнения
async function asyncSeriesExecuter(arrs) {

    // итерация по массиву функций
    for (let arr of arrs) {

        //Вывод в логе результат выполнения функции и время когда она была выполнена
        console.log(await arr(), Date());
    }
}

asyncSeriesExecuter(funcArray)