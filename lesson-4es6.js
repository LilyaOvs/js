'use strict';
//Задание №1.1
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }
}

let products = new Product("prod-1", 100);
products.make25PercentDiscount();

console.log(products);


//Задание №1.2
class Post {
    constructor(author, text1, date) {
        this.author = author;
        this.text1 = text1;
        this.date = date;
    }
    edit(text1) {
        this.text1 = text1;
    }
}

class AttachedPost extends Post {
    constructor(author, text1, date) {
        super(author, text1, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let attached = new AttachedPost('admin', 'hello', new Date);
console.log(attached);
attached.makeTextHighlighted();
attached.edit('Какой-то текст');
console.log(attached);

//Файл lesson-4es5.js в index.html оставила закомментированным, потому что в консоле возникает ошибка из-за одинаковых идентификаторов