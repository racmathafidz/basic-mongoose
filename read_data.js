const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/learn-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

//                                  How to Show All Item
// Fruit.find((error, fruits) => {
//     error ? console.log(error) : mongoose.connection.close(); console.log(fruits)
// })

//                                  How to Show Item's Name Only
Fruit.find((error, fruits) => {
    error ? console.log(error) : mongoose.connection.close(); fruits.forEach( element => {console.log(element.name)})
})