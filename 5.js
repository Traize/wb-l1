const data = [
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
    { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
    { userId: 1, id: 4, title: 'et porro tempora', completed: true },
    { userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false },
]

json = JSON.stringify(data)
// Класс для удобного создания узлов связного списка
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function JSONtoLinkedList(json) {
    // Преобразуем JSON
    const parsedJSON = JSON.parse(json);

    // Если полученные данные не являются массивом или длина этого массива равна нулю, останавливаем выполнение
    if (!Array.isArray(parsedJSON) || parsedJSON.length === 0) {
        return;
    }

    // Создаем голову списка
    const head = new Node(parsedJSON[0]);
    // Сохраняем в переменную текущего узла ссылку на голову
    let currentNode = head;

    // В цикле обходим каждый элемент массива
    for (let i = 1; i < parsedJSON.length; i++) {
        // Создаем новый узел с соответствующими данными
        const newNode = new Node(parsedJSON[i]);
        // Для текущего узла указываем ссылку на новый узел
        currentNode.next = newNode;
        // В качестве текущего узла сохраняем только что созданный узел
        currentNode = newNode;
    }

    // Возвращаем начало списка
    return head;
}

let list = JSONtoLinkedList(json)
while (list) {
    console.log(list.data)
    list = list.next
}
