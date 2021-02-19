"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var fs = require('fs');
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.mostrarIMBD = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarDatosPeliculas();
        }
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var imbd2 = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, imbd2);
    };
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var fs = require('fs');
        var imdb33 = new Imdb([]);
        fs.readFileSync(nombreFichero);
        //console.log(JSON.parse(fs.readFileSync("imdbBBDD.json")
        imdb33.peliculas = JSON.parse(fs.readFileSync(nombreFichero)).peliculas;
        return imdb33;
    };
    return Imdb;
}());
exports.Imdb = Imdb;
