//read and set any environment variables with the .env package
require("dotenv").config();
    
//require data from file system npm package
var fs = require("fs");

//requiring the function exported from .js files
var mySpotify = require("./spotify");
var myMovies = require("./movies");
var myConcert = require("./concerts.js");


//creates user command.
var userCommand=process.argv[2]
//creates user input.
var userInput=process.argv.splice(3,process.argv.length).join(' ');


//program conditions
if(!userCommand || ["spotify-this", "movie-this", "concert-this"].indexOf(userCommand.toLowerCase()) < 0) command = "show";
if(!search || search.trim().length < 1) search = "not enough characters";

if(userCommand.toLowerCase() === "spotify-this"){
    console.log("searching for song");
    mySpotify.search(search);
}else{
    console.log("searching for movie")
    myMovies.search(search);
}