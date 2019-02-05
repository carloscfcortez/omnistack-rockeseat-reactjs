const express = require('express');
const routes = express.Router();


const TweetController = require('./controllers/TweetController');


routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

// routes.get('/', (req, res) => {
//     return res.send('hello');
// });

module.exports = routes;