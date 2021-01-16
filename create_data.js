const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/learn-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

//                                                  How to Insert One Item :
// const jeruk = new Fruit({
//     name: "Jeruk",
//     rating: 9,
//     review: "asem enak"
// })

// jeruk.save(function(error) {
//     error ? console.log(error) : console.log("success")
// })

//                                                 How to Insert Multiple Item :
const pisang = new Fruit({
    name: "Pisang",
    rating: 8,
    review: "manis"
})

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "gatau"
})

const salak = new Fruit({
    name: "Salak",
    rating: 8,
    review: "manis enak"
})

Fruit.insertMany([pisang, kiwi, salak], error => {
    error ? console.log(error) : mongoose.connection.close(); console.log("success")
})
