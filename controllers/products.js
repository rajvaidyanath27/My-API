const Product = require("../models/product");

const getAllProducts = async (req,res) => {
    const myData = await Product.find({ "name": "Huawei P60 Pro"});
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req,res) => {
    const myData = await Product.find({ company: "Apple"});
    res.status(200).json({ myData });
};

module.exports = {getAllProducts,getAllProductsTesting}; 