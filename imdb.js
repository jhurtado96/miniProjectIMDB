"use strict";
exports.__esModule = true;
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.mostrarIMBD = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarDatosPeliculas();
        }
    };
    return Imdb;
}());
exports.Imdb = Imdb;
