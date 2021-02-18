"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var Professional_1 = require("./Professional");
var imdb_1 = require("./imdb");
//Movie 1
var movie1 = new Movie_1.Movie("Cadena Perpetua", 1994, "EEUU", "drama");
//profesionales movie1
var director1 = new Professional_1.Professional("Frank Darabont", 33, "Masculino", 68, 1.83, "Rubio", "Azul", "Blanco", false, "Estadounidense", 3, "Director");
var distributor1 = new Professional_1.Professional("Luis", 43, "Masculino", 88, 1.89, "Catanyo", "Marron", "Negro", true, "Noruego", 1, "distribuidor");
var writer1 = new Professional_1.Professional("Stephen King", 53, "Masculino", 98, 1.93, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 2, "guionista");
var producer1 = new Professional_1.Professional("John Steward", 53, "Masculino", 75, 1.73, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 0, "productor");
var actor1Movie1 = new Professional_1.Professional("Tim Robbins", 62, "Masculino", 70, 1.75, "Castanyo", "Verde", "Blanco", false, "estadounidense", 3, "actor");
var actor2Movie1 = new Professional_1.Professional("Morgan Freeman", 83, "Masculino", 81, 1.90, "Gris", "Marron", "Negro", false, "Estadounidense", 1, "actor");
var actors1 = [actor1Movie1, actor2Movie1];
//Movie2
var movie2 = new Movie_1.Movie("Vengadores: infinity war", 2018, "EEUU", "accion");
//Profesionales Movie2
var director2 = new Professional_1.Professional("Anthony Russo", 43, "Masculino", 78, 1.83, "Moreno", "Verde", "Blanco", false, "Estadounidense", 2, "Director");
var distributor2 = new Professional_1.Professional("Rose Evans", 43, "Femenino", 64, 1.55, "Pelirroja", "Marron", "Negra", true, "Estadounidense", 0, "distribuidor");
var writer2 = new Professional_1.Professional("Christopher Markus", 48, "Masculino", 76, 1.77, "Pelirrojo", "Verde", "Amarillo", false, "Canadiense", 3, "guionista");
var producer2 = new Professional_1.Professional("Trench Ruffalo", 73, "Masculino", 70, 1.73, "rubio", "Verde", "Amarillo", false, "Ingles", 3, "productor");
var actor1Movie2 = new Professional_1.Professional("Robert Downey Jr", 55, "Masculino", 71, 1.73, "Moreno", "Marron", "Blanco", false, "Estadounidense", 0, "actor");
var actor2Movie2 = new Professional_1.Professional("Chris Evans", 39, "Masculino", 82, 1.91, "Rubio", "Azul", "Blanco", false, "Estadounidense", 0, "actor");
var actors2 = [actor1Movie2, actor2Movie2];
//Metodos set movie 1
movie1.setActors(actors1);
movie1.setWriter(writer1);
movie1.setDistributor(distributor1);
movie1.setDirector(director1);
movie1.setProducer(producer1);
movie1.setGenre("drama");
movie1.setIsMCU(false);
movie1.setPlataform("Netflix");
movie1.setNationality("EEUU y Canada");
movie1.setLanguaje("ingles");
movie1.setMainCharacterName("Andrew Dufresne");
movie1.mostrarDatosPeliculas();
//Metodos set movie 2
movie2.setActors(actors2);
movie2.setWriter(writer2);
movie2.setDistributor(distributor2);
movie2.setDirector(director2);
movie2.setProducer(producer2);
movie2.setGenre("acción y drama");
movie2.setIsMCU(true);
movie2.setPlataform("Disney");
movie2.setNationality("EEUU");
movie2.setLanguaje("ingles");
movie2.setMainCharacterName("Tony Stark");
movie2.mostrarDatosPeliculas();
//Clase Imdb
var arrPelis = [movie1, movie2];
var imdb = new imdb_1.Imdb(arrPelis);
imdb.mostrarIMBD();
// JSON
<<<<<<< HEAD
console.log(JSON.stringify(imdb));
=======
var imdb1 = JSON.stringify(imdb);
var fs = require('fs');
fs.writeFileSync("imdbBBDD.json", imdb1);
>>>>>>> rama-javi
