//This is the schema which we have created on our local
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        //it means the name field must always be provided when creating a product. If missing, it will throw an error.
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
        //it means if no value is provided for featured, it defaults to false.
    },
    rating: {
        type: Number,
        default: 4.9, 
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        //enum Restricts company to specific values
        enum: {
            values: ["Apple", "samsung", "dell", "Nothing", "Vivo", "Motorola", "Realme"],
            message: `{VALUE} is not supported` ,
        },
    },
});

module.exports = mongoose.model("Product", productSchema);

