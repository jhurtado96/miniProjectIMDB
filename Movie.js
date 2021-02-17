"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(tittle, releaseYear, nationality, genre) {
        this.title = tittle;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.mostrarDatosPeliculas = function () {
        console.log("Peliculas: ");
        console.log("Tittle: " + this.title);
        console.log("Release year: " + this.releaseYear);
        console.log("");
    };
    return Movie;
}());
exports.Movie = Movie;
