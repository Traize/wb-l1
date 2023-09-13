let obj = { name: 'John', age: 25, currency: ['rub', 'usd'], obj: { asd: 123 }, bool: true, isNUll: null }

function stringify(input) {
    // Проверка являются ли переданные данные объектом
    if (typeof input === 'object' && input !== null) {
        // преобразование зависит от типа объекта
        // преобразование если это массив
        if (Array.isArray(input)) {
            input = input.reduce((acc, item) => acc == "[" ? (acc + item) : ("[" + `"${acc}"` + ',' + `"${item}"`),) + "]"
            return input
        }
        // преобразование если это объект
        // item это ключ объекта, input[item] это значение по этому ключу
        // значение передается в функцию stringify чтобы вызвать рекурсию
        else input = Object.keys(input).reduce((acc, item) => acc == "{" ? '{"' + item + '"' + ':' + `${stringify(input[item])}` : acc + ',"' + item + '"' + ':' + `${stringify(input[item])}`, "{") + "}"
        return input
    }
    // если это строка то оборочивем её в ковычки
    else if (typeof input === 'string') {
        return `"${input}"`;
    }
    // если это лбой другой объект типа null, true,false и т.д., то преоброзвываем их к строке
    else {
        return String(input)
    }

}

console.log(stringify(obj))