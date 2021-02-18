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
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Movie.prototype.getActors = function () {
        return this.actors;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.getNationality = function () {
        return this.nationality;
    };
    Movie.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.getWriter = function () {
        return this.writer;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.getLanguaje = function () {
        return this.languaje;
    };
    Movie.prototype.setLanguaje = function (languaje) {
        this.languaje = languaje;
    };
    Movie.prototype.getPlataform = function () {
        return this.plataform;
    };
    Movie.prototype.setPlataform = function (plataform) {
        this.plataform = plataform;
    };
    Movie.prototype.isIsMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.getMainCharacterName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.getProducer = function () {
        return this.producer;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.getGenre = function () {
        return this.genre;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Movie.prototype.mostrarDatosPeliculas = function () {
        console.log("*******************************");
        console.log("Peliculas: ");
        console.log("Tittle: " + this.title);
        console.log("Release year: " + this.releaseYear);
        for (var i = 0; i < this.getActors().length; i++) {
            if (this.getActors()[i].getProfession() == "actor") {
                console.log("Actors: " + this.getActors()[i].mostrarDatos);
            }
        }
        console.log("Nacionality: " + this.nationality);
        console.log("Director: " + this.director.mostrarDatos());
        console.log("Writer: " + this.writer.mostrarDatos());
        console.log("Language: " + this.languaje);
        console.log("Plataform: " + this.plataform);
        console.log("Is MCU?: " + this.isMCU);
        console.log("Main character name: " + this.mainCharacterName);
        console.log("Producer: " + this.producer.mostrarDatos());
        console.log("Distributor: " + this.distributor.mostrarDatos());
        console.log("Genre: " + this.genre);
        console.log("*******************************");
    };
    return Movie;
}());
exports.Movie = Movie;
