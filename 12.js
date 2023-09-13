class Book {
    // Основыне переменные
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    // Блок с поулчением информации о книге
    getTitle() {
        console.log(this.title)
    }
    getAuthor() {
        console.log(this.author)
    }
    getYear() {
        console.log(this.year)
    }
    // Блок с перезаписью ифнормации
    setTitle(value) {
        this.title = value
    }
    setAuthor(value) {
        this.author = value
    }
    setYear(value) {
        this.year = value
    }
}

let myNewBook = new Book('Thus Spoke Zarathustra', "Friedrich Nietzsche", 1883)

myNewBook.getAuthor()
myNewBook.getTitle()
myNewBook.getYear()

myNewBook.setAuthor('Ray Bradbury')
myNewBook.setTitle('Death Is a Lonely Business')
myNewBook.setYear('1985')

myNewBook.getAuthor()
myNewBook.getTitle()
myNewBook.getYear()