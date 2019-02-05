const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


const server = require('http').Server(app);
const io = require('socket.io')(server);




// mongoose.connect('mongodb://localhost:27017/goweek', {
//     useNewUrlParser: true
// });

mongoose.connect('mongodb://goweek:goweek1234@ds251287.mlab.com:51287/goweek-backend-carlos', {
    useNewUrlParser: true
});


app.use(cors());

app.use((req, res, next) => {
    req.io = io;

    return next();
});



//receber json em todas as requisições
app.use(express.json());
app.use(require('./routes'));



var PORT = process.env.PORT || 4000;


server.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
});