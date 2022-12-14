var express = require('express');
var router = express.Router();
const moviesCtrl= require('../controllers/movies')

//get to /movies
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// we are going to create a new route to /movies/new
router.get('/new', moviesCtrl.new)

 // POST route will be /movies
 router.post('/', moviesCtrl.create)

module.exports = router;
