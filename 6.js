let arr = [
    { name: 'John', age: 25 },
    { name: 'Ton', age: 22 },
    { name: 'Kon', age: 21 },
    { name: 'Akon', age: 33 },
    { name: 'Zxc', age: 45 },
    { name: 'Brom', age: 15 },
    { name: 'Qrom', age: 15 },
    { name: 'Arom', age: 15 },
    { name: 'Aassam', age: 15 },
]

function sortArray(arr) {
    arr.sort(function (a, b) { //Встроенная функция сортировки массива
        if (a.age === b.age) { // проверка если возраст совпадает начинается сортировка по имени
            return a.name.localeCompare(b.name) // проверка кодировки букв
        }
        return a.age > b.age ? 1 : -1 // проверка по возрастанию возратса
    }
    )
}
arr.forEach(item => console.log(item))