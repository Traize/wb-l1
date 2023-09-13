

function MathX() {

    const libObjects = {}


    // Выводит все числа в ряду фибоначи до заданного
    libObjects.allFibonacci = function (num) {
        let allnums = [0, 1] // Начальные значения для ряда
        for (let i = 2; i < num; i++) { // Отсчёт массива начинается с 2 т.к. 0ой и 1ый элемент массива уже заданны
            allnums[i] = allnums[i - 1] + allnums[i - 2] // i-ое число в массиве равна сумме двух предыдущих
        }
        return allnums
    }
    // Выводит число под номером 'num' в ряду Фибоначчи
    libObjects.fibonacciNum = function (num) {
        let next = 1
        let prev = 0
        for (let i = 2; i <= num; i++) {
            let a = next // временная переменная т.к. next будет перезаписана
            next = prev + next // переменная next = сумме двух элементов
            prev = a // перезапись значения переменной prev
        }
        return `${num}ое число в ряду фибоначи ${prev}`
    }

    // Проверка является число простым
    function isPrime(num) {
        for (let i = 2; i < num; i++) { // перебор всех чисел до заданного 
            if (num % i === 0) return false;  // если у числа есть делитель без остатка отбрасываем его
        }
        return num !== 1; //Возвращается число если оно не равно 1
    }

    libObjects.allPrimes = function (num) {
        let primes = [] // Массив для простых чисел
        for (let i = 2; i <= num; i++) {  //перебор начинается с 2 т.к. единицу не считают простым числом
            if (isPrime(i)) primes.push(i) // ели число проходит проверку добавляем его в массив
        }
        return primes
    }

    libObjects.selectedPrime = function (num) {
        let count = 0; // создание счетчика который будет определять количество итераций
        let startingNum = 2; //перебор начинается с 2 т.к. единицу не считают простым числом
        while (count < num) { // будет выполняться пока счетчик 
            if (isPrime(startingNum)) { // Проверка на простое число
                count++; // если число простое то счетчик увеличивается на 1
            }
            startingNum++; // если число не прошло проверку то увеличиваем число которое будет проходить проверку на 1
        }
        return startingNum - 1; // Вычитаем 1 т.к. после последнего отрабатывания счетчик startingNum увеличивается
    }
    return libObjects
}

const math1 = MathX()

console.log(math1.allFibonacci(8))
console.log(math1.fibonacciNum(8))
console.log(math1.allPrimes(70))
console.log(math1.selectedPrime(13))
