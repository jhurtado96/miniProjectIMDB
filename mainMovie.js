"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var Professional_1 = require("./Professional");
var imdb_1 = require("./imdb");
//profesionales
var profesionalcito1 = new Professional_1.Professional("Pablo", 33, "Masculino", 68, 1.83, "Rubio", "Azul", "Blanco", false, "Espanyol", 3, "Actor");
var profesionalcito2 = new Professional_1.Professional("Luis", 43, "Masculino", 88, 1.89, "Catanyo", "Marron", "Negro", true, "Noruego", 3, "Manager");
var profesionalcito3 = new Professional_1.Professional("Julian", 53, "Masculino", 98, 1.53, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 3, "Producer");
var profesionalArr = [profesionalcito1, profesionalcito2, profesionalcito3];
//Movies
var movie1 = new Movie_1.Movie("Cadena Perpetua", 1994, "EEUU", "drama");
var movie2 = new Movie_1.Movie("The gentlemen", 2020, "UK", "accion");
var movie3 = new Movie_1.Movie("Soul", 2020, "EEUU", "animacion");
var movie4 = new Movie_1.Movie("La trinchera infinita", 2019, "España", "drama");
var movie5 = new Movie_1.Movie("Vengadores: infinity war", 2018, "EEUU", "accion");
//Metodos set
movie1.setActors(profesionalArr);
movie1.setWriter(profesionalcito2);
movie1.setDistributor(profesionalcito3);
movie1.setDirector(profesionalcito2);
movie1.setProducer(profesionalcito1);
movie1.setGenre("drama");
movie1.setIsMCU(true);
movie1.setPlataform("Netflix");
movie2.setActors(profesionalArr);
movie2.setWriter(profesionalcito2);
movie2.setDistributor(profesionalcito3);
movie2.setDirector(profesionalcito2);
movie2.setProducer(profesionalcito1);
movie2.setGenre("drama");
movie2.setIsMCU(true);
movie2.setPlataform("Netflix");
movie3.setActors(profesionalArr);
movie3.setWriter(profesionalcito2);
movie3.setDistributor(profesionalcito3);
movie3.setDirector(profesionalcito2);
movie3.setProducer(profesionalcito1);
movie3.setGenre("drama");
movie3.setIsMCU(true);
movie3.setPlataform("Netflix");
var arrPelis = [movie1, movie2, movie3];
var imdb = new imdb_1.Imdb(arrPelis);
imdb.mostrarIMBD();
//Mostrar metodos
/*movie2.mostrarDatosPeliculas();
movie3.mostrarDatosPeliculas();
movie4.mostrarDatosPeliculas();
movie5.mostrarDatosPeliculas();

console.log("Metodos Get")
console.log(movie3.getReleaseYear());
console.log(movie2.getDirector());
console.log(movie2.getWriter());
console.log(movie1.getDistributor());
console.log(movie1.getGenre());
console.log(movie1.getTitle());
console.log(movie2.getTitle());*/
