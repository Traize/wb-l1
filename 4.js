

// функция принимает число и массив слов
function getNoun(num, wordsArray) {
    // отрицательно число преобразовываем в положительное, чтобы пройти проверки
    let n = Math.abs(num);
    // берется остаток деления на 100
    n %= 100;
    // если находится в определенном промежутке, то возвращается определенная форма слова из массива
    if (n >= 5 && n <= 20) {
        return wordsArray[2]
    }
    n %= 10;
    if (n === 1) {
        return wordsArray[0]
    }
    if (n >= 2 && n <= 4) {
        return wordsArray[1]
    }
    // Если число равно 0
    return wordsArray[2];
}
let users = ['пользователь', 'пользователей', 'пользователя']
let plates = ['тарелка', 'тарелки', 'тарелок']
console.log(getNoun(2, plates))