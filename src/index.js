const express = require('express');

const app = express();



app.get('/', (req, res) => {
    return res.send('hello');
});

var PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log('Server started on port 3000');
});