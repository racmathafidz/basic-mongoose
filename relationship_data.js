const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/learn-mongoose', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please fill the name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please fill the name"]
    },
    age: {
        type: Number
    },
    favoriteFruit: fruitSchema
})

const People = mongoose.model("People", peopleSchema)

const duku = new Fruit({
    name: "Duku",
    rating: 7,
    review: "kecil, asem"
})

duku.save(function(error) {
    error ? console.log(error) : console.log("fruit saved")
})

const racmat = new People({
    name: "Racmat",
    age: 20,
    favoriteFruit: duku
})

racmat.save(function(error) {
    error ? console.log(error) : console.log("people saved")
})
