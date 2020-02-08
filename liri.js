require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var spotify = new Spotify(key.spoatify);

var getSpotify = function (songName) {
    if (songName === undefined) {
        songName = "whats my age";
    }

    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            var song = data.tracks.items;

            for (let i = 0; i < song.length; i++) {
                console.log(i);
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + song[i].preview_url);
                console.log("artist(s): " + song[i].artist.map(getArtistNames));
                console.log("album: " + song[i].album.name);
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
            }
        }
    );
};

var getMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr Nobody";
    }

    var urlHit =
        "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlHit).then(
        function (response) {
            var jsonData = response.data;

            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    );
};

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "spotify-this-song":
            getSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        
              
    }
};

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.arg[2], process.argv.slaice(3).join(""));
