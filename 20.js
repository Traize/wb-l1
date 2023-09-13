function currentStorageSize() {
    let size = 0
    // цикл проходится по всему storage и рассчитывает длину символов ключей и значений по этим ключам
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let item = localStorage.getItem(key)
        // записывает сумму в переменную 
        size += (key.length + item.length) * 2
    }
    return console.log(`Текущий размер ${size} Максимальный размер ${maxStorageSize}`)
}

