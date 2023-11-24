const {Schema,model} = require('mongoose')
const ProductSchema = new Schema({
    name:String
})
module.exports = model('StoreProducts'/*collection name in the database*/,ProductSchema/*schema to use on it*/)