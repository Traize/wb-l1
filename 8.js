function f1() {
    return "Функция 1"
}
function f2() {
    return "Функция 2"
}
function f3() {
    return "Функция 3"
}
function f4() {
    return "Функция 4"
}
function f5() {
    return "Функция 5"
}


let arrs = [f1, f2, f3, f4, f5] //Массив функции
let newArr = []
function arrFunction(arr) { //Функция приимающая массив

    return function returnAll() { // возвращат функции которая вызывает каждую функцию в массиве

        // for (let i = 0; i < arr.length; i++) {
        //     newarr[i] = arr[i]()
        // }
        // return newarr

        arr.forEach(item => (
            newArr.push(item())
        )) //вызов функции из массива 

        return newArr
    }()
}
arrFunction(arrs)
console.log(newArr)

