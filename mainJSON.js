"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var imdb_1 = require("./imdb");
var fs = require('fs');
var JSONpeliculas;
//Mostrar por consola las preguntas para el usuario:
var prompt = require('prompt-sync')();
var titleDePeli = prompt('Cual es el titulo: ');
var anyoEstreno = prompt('Cual es el anyo de estreno: ');
var nacionalidadPeli = prompt('Cual es la nacionalidad: ');
var generoPeli = prompt('Cual es el genero: ');
//Objeto con los datos obtenidos del usuario:
var peliculon = new Movie_1.Movie(titleDePeli, anyoEstreno, nacionalidadPeli, generoPeli);
var imdbEmpty = new imdb_1.Imdb([]);
//Introducir el objeto peliculon en el JSON:
imdbEmpty = imdbEmpty.obtenerInstanciaIMDB("imdbBBDD.json");
imdbEmpty.peliculas.push(peliculon);
imdbEmpty.escribirEnFicheroJSON("imdbBBDD.json");
