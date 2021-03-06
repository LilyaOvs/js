'use trict';

//Задание №1
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " - это ноль");
    } else if (i % 2 == 1) {
        console.log(i + " - нечётное число");
    } else {
        console.log(i + " - чётное число");
    }
}


//Задание №2
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating["dislikes"]);
console.log(post.comments[1]["userId"]);
console.log(post.comments[1]["text"]);


//Задание №3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price = product.price - product.price * 0.15;
});

console.log(products);


//Задание №4
const tovars = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const tovarsPhotos = tovars.filter(function (tovar) {
    return "photos" in tovar && tovar.photos.length > 0
});
console.log(tovarsPhotos);

const tovarPrice = tovars.sort(function (a, b) {
    return a.price - b.price;
});
console.log(tovarPrice);


//Задание №6

for (let x = "x"; x.length <= 20; x += "x") {
    console.log(x);
}