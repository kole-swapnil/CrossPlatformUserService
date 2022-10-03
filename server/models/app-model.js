const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appSchema = new Schema({
    appName: {type: String, required: true},
    appDescription: {type: String, required: true},
    users: [{type: mongoose.Types.ObjectId,required: true,ref: 'User'}]
})

module.exports = mongoose,model('App',appSchema);