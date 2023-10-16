const data = [
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
    { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
    { userId: 1, id: 4, title: 'et porro tempora', completed: true },
    { userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false },
]

json = JSON.stringify(data)

// Конструтор для создания элементов  в списке
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function toList(json) {

    const parsedJSON = JSON.parse(json);

    // Проверка является ли обект массивом и не пустой ли он
    if (!Array.isArray(parsedJSON) || parsedJSON.length === 0) {
        return;
    }

    //Начальное положение head
    const head = new Node(parsedJSON[0]);
    // Присваивание положение переменной чтобы потом перемещать положение head
    let сurrentNode = head;

    for (let i = 1; i < parsedJSON.length; i++) {
        // Переменная которая создает ссылку на следующий элемент в списке
        const newNode = new Node(parsedJSON[i])
        // Записывает в next ссылку на след элемент
        сurrentNode.next = newNode

        // Текущий элемент меняется на следующий
        сurrentNode = newNode
    }
    return head
}

let list = toList(json)

while (list) {
    console.log(list)
    list = list.next
}
