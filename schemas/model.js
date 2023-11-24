const {Schema,model} = require('mongoose')
const SampleSchema = new Schema({
    name:String
})
module.exports = model('SampleSchema'/*collection name in the database*/,SampleSchema/*schema to use on it*/)