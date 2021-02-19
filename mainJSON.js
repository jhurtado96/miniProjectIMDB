"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var imdb_1 = require("./imdb");
var fs = require('fs');
var JSONpeliculas;
var prompt = require('prompt-sync')();
var titleDePeli = prompt('Cual es el titulo');
var anyoEstreno = prompt('Cual es el anyo de estreno');
var nacionalidadPeli = prompt('Cual es la nacionalidad');
var generoPeli = prompt('Cual es el genero');
var peliculon = new Movie_1.Movie(titleDePeli, anyoEstreno, nacionalidadPeli, generoPeli);
//Tengo JSON de peliculas
// JSONpeliculas = JSON.parse(fs.readFileSync("./imdbBBDD.json"))
// Objeto a JSON
var imdbEmpty = new imdb_1.Imdb([]);
imdbEmpty = imdbEmpty.obtenerInstanciaIMDB("imdbBBDD.json");
imdbEmpty.peliculas.push(peliculon);
imdbEmpty.escribirEnFicheroJSON("imdbBBDD.json");
//       let peliculon1= JSON.stringify(peliculon)
//         fs.writeFileSync("jsondePelicula.json",peliculon1)
//         let peliculonJSON = JSON.parse(fs.readFileSync("jsondePelicula.json"))
//         JSONpeliculas.peliculas.push([peliculonJSON])
