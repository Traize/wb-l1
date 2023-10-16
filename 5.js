const data = [
    { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false },
    { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
    { userId: 1, id: 4, title: 'et porro tempora', completed: true },
    { userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false },
]

json = JSON.stringify(data)


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function JSONtoLinkedList(json) {

    const parsedJSON = JSON.parse(json);


    if (!Array.isArray(parsedJSON) || parsedJSON.length === 0) {
        return;
    }


    const head = new Node(parsedJSON[0]);

    let currentNode = head;


    for (let i = 1; i < parsedJSON.length; i++) {

        const newNode = new Node(parsedJSON[i]);

        currentNode.next = newNode;

        currentNode = newNode;
    }


    return head;
}

let list = JSONtoLinkedList(json)
while (list) {
    console.log(list.data)
    list = list.next
}
