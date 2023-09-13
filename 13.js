class Shape {
    // Класс с которого будут наследоваться методы
    getPeremiter() {
        return `Nothing here`
    }
    getSquare() {
        return `Nothing here`
    }
}

class Rectangle extends Shape {
    // Конструктор создает и инициализирует объекты
    constructor(width, height) {
        // super функция вызвающая конструктор родительского элемента
        super()
        this.width = width
        this.height = height
    }
    // измененные методы родительского элемента
    getPeremiter() {
        return `Периметр = ${2 * (this.width + this.height)}`
    }
    getSquare() {
        return `Площадь = ${this.width * this.height}`
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    getPeremiter() {
        return `Периметр = ${(2 * Math.PI * this.radius).toFixed(2)}`
    }
    getSquare() {
        return `Площадь = ${(Math.PI * this.radius ** 2).toFixed(2)}`
    }
}

class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super()
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    getPeremiter() {
        return `Периметр = ${this.side1 + this.side2 + this.side3}`
    }
    getSquare() {
        const p = this.side1 + this.side2 + this.side3
        return `Площадь = ${(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))).toFixed(2)}`
    }
}


let rec = new Rectangle(2, 4)
console.log(rec.getPeremiter())
console.log(rec.getSquare())

let circ = new Circle(5)
console.log(circ.getPeremiter())
console.log(circ.getSquare())

let tri = new Triangle(2, 4, 3)
console.log(tri.getPeremiter())
console.log(tri.getSquare())