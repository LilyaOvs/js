'use strict';
//Задание №1.1
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - this.price * 0.25;
}

let products = new Product("prod-1", 100);
products.make25PercentDiscount();

console.log(products);


//Задание №1.2
function Post(author, text1, date) {
    this.author = author;
    this.text1 = text1;
    this.date = date;
}

Post.prototype.edit = function (text1) {
    this.text1 = text1;
};

function AttachedPost(author, text1, date) {
    Post.call(this, author, text1, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let attached = new AttachedPost('admin', 'hello', new Date);
console.log(attached);
attached.makeTextHighlighted();
attached.edit('Какой-то текст');
console.log(attached);