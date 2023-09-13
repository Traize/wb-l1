let str = 'аргентина манит негра'
let str2 = 'Шалаш'
let str3 = `asdadsdsadas`
str.l
function isPolindrom(s) {
    const strReverse = s.toLowerCase() // форматирование строки к одному регистру
        .replace(/\s/g, '') // удаление из строки любых символов по типу пробела
        .split('') // разбитие строки на массив
        .reverse() // встроенный метод массива выстраивающий все элементы массива в обратном порядке
        .join('') // объединяет все элементы массива в строку
    console.log((strReverse === s.toLowerCase().replace(/\s/g, '')) ? `${s} - полиндром` : `${s} - не полиндром`)
}

isPolindrom(str)
isPolindrom(str2)
isPolindrom(str3)