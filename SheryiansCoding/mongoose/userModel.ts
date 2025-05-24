// mongodb+srv://rababportfolio2020:rabab14<>@rabab.xwpa1.mongodb.net/

const mongoose =require('mongoose')

mongoose.connect(`mongodb+srv://rababportfolio2020:rabab14<>@rabab.xwpa1.mongodb.net/`)

const userSchema = mongoose.Schema({
    name:String,
    userName:String,
    email:String
})

module.exports = mongoose.model('user', userSchema)