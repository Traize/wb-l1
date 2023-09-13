


function strangeNumber(num) {
    let sum = 0 //переменная куда будет записываться сумма делителей
    for (let i = 1; i < num; i++) { // Перебор всех делитей числа не включая само число
        if (num % i === 0) { // Отброс чисел с остатком
            sum += i   // суммирование делителей
        }
    }
    console.log(sum === num ? `${num} является странным числом` : `${num} не является странным числом`) // проверка на рваенство суммы делителей и числа
}

strangeNumber(6)
strangeNumber(16)
strangeNumber(28)
strangeNumber(28)