var mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
 name: String,
 Description:  String,
 imgURL:String,
 Quantity:Number,
 price:Number
})

var Product = mongoose.model('product', ProductSchema)

module.exports = Product