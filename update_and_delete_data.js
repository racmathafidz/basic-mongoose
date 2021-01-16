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

// How To Update
// Fruit.updateOne({_id: '6002b96bfcf9b21a9f6858ae'}, {name: 'Nanas'}, (error) => {
//     error ? console.log(error) : console.log("updated")
// })

// How To Delete
Fruit.deleteOne({name: 'Duku'}, (error) => {
    error ? console.log(error) : console.log("deleted")
})