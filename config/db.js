const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/recipes', {useNewUrlParser: true}).then(() => {
    console.log('DB connection established...');
}).catch((error) => {
    console.log('DB connection error: ', error);
});