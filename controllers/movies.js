const Movie= require('../models/movie')
module.exports={
    new: newMovie,
    create
}
function newMovie(req, res){
    res.render('movies/new')
}
function create(req,res){
    //convert nowShowing's checkbox of nothing
    req.body.nowShowing = !!req.body.nowShowing
    //remove any whitespace at start
    req.body.cast=req.body.cast.trim()

    if (req.body.cast) req.body.cast= req.body.cast.split(/\s*,\s*/)
    const movie = new Movie(req.body)
    movie.save(function(err){
        if(err) return res.render('movies/new')
        console.log(movie)
        res.redirect('/movies/new')

    })
}