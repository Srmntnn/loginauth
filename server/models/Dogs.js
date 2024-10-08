const mongoose = require('mongoose');
const { Schema } = mongoose;

//create new Schema object for Dogs
const dogsSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 3,
    },
    age: Number,
    color: String,
    condition: String,
    shelter: String,
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Dogs = mongoose.model('Dogs', dogsSchema);
module.exports = Dogs;