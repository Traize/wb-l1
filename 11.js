function externalFunction() {
    let counter = 0     //Переменная во внешней функции
    return function count() {
        return counter++   // Внутреняя функция обращается к переменной за пределами своего окружения
    }
}

let firstCall = externalFunction() // создает собственное окружение

let secondCall = externalFunction()

console.log(firstCall(), 'first')
console.log(firstCall(), 'first')
console.log(firstCall(), 'first')
console.log(secondCall(), 'second')
console.log(secondCall(), 'second')
console.log(secondCall(), 'second')