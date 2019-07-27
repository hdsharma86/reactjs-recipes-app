const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    description: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    username: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);