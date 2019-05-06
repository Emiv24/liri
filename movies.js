//Require data from node-spotify npm package
var spotify = require('omdbapi');
// Requiring our spotify, OMDB, and bands in town modules exported from keys.js
var keys = require("./keys");
// storing API keys in variables 
var spotify = new spotify(keys.movies);
// require data from file system npm package 
var fs = require("fs");


function myMovies(userInput) {
    var movie = userInput;
    if (!movie) {
        movie = "end game"
    }
    movies.search({
        type: 'movie',
        query: movie
    }, function (err, data) {
        if (err) {
            return console.log('error occurred: ' + err)
        }


        // console.log(data.tracks.items[0]);
        console.log("\n-------------------\nMovie Name: " + data.movies.items[0].title);
        console.log("Genre: " + data.movies.items[0].genre[0].name);
        console.log("Rated: " + data.movies.items[0].rated.name);
        console.log("Year: " + data.movies.items[0].year[0].name);
        // data.tracks.items[0].artists.forEach9artist => {
        //    console.log(artist.name)
        //   })
        console.log("Preview URL: " + data.movies.items[0].preview_url + "\n--------------\n");
    });
}

//exporting the function that we'll use in liri.js
module.exports = myMovies;