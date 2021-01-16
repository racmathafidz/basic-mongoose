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

const jeruk = new Fruit({
    name: "Jeruk",
    rating: 11,
    review: "asem enak"
})

jeruk.save(function(error) {
    error ? console.log(error) : console.log("success")
})
