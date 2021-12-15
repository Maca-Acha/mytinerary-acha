const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    
})

const Comment = mongoose.model("comment",commentSchema)

module.exports = Comment