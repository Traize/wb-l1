
const jeyson = '{"name":"John","age":25,"currency":["rub","usd"],"obj":{"asd":123},"bool":true,"isNUll":null}'

// Решение из интернета
// как и в eval можно вставить скрипт
const jsonObject = (new Function("return " + jeyson))()

console.log(JSON.parse(jeyson))
console.log(jsonObject)



// Learn javascript
// Функции, объявленные через new Function, имеют [[Environment]],
//  ссылающийся на глобальное лексическое окружение, а не на родительское.
//   Поэтому они не могут использовать внешние локальные переменные.
function parse() {
    const jeyson2 = '{"name":"John","age":25,"currency":["rub","usd"],"obj":{"asd":123},"bool":true,"isNUll":null}'
    const jsonObject = (new Function("return " + jeyson2))
    return jsonObject

}
parse()()