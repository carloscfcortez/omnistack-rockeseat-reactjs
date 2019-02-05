const express = require('express');
const mongoose = require('mongoose');


const app = express();



mongoose.connect('mongodb://goweek:goweek1234@ds251287.mlab.com:51287/goweek-backend-carlos', {
    useNewUrlParser: true
});


app.use(require('./routes'));



var PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});