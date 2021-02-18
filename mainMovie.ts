import { Movie } from "./Movie"
import { Professional } from "./Professional"
import { Imdb } from "./imdb"



//Movie 1
let movie1 = new Movie("Cadena Perpetua", 1994, "EEUU", "drama");
//profesionales movie1
let director1 = new Professional("Frank Darabont", 33, "Masculino", 68, 1.83, "Rubio", "Azul", "Blanco", false, "Estadounidense", 3, "Director")
let distributor1 = new Professional("Luis", 43, "Masculino", 88, 1.89, "Catanyo", "Marron", "Negro", true, "Noruego", 1, "distribuidor")
let writer1 = new Professional("Stephen King", 53, "Masculino", 98, 1.93, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 2, "guionista")
let producer1 = new Professional("John Steward", 53, "Masculino", 75, 1.73, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 0, "productor")
let actor1Movie1 = new Professional("Tim Robbins", 62, "Masculino", 70, 1.75, "Castanyo", "Verde", "Blanco", false, "estadounidense", 3, "actor")
let actor2Movie1 = new Professional("Morgan Freeman", 83, "Masculino", 81, 1.90, "Gris", "Marron", "Negro", false, "Estadounidense", 1, "actor")
let actors1 = [actor1Movie1, actor2Movie1]

//Movie2
let movie2 = new Movie("Vengadores: infinity war", 2018, "EEUU", "accion")
//Profesionales Movie2
let director2 = new Professional("Anthony Russo", 43, "Masculino", 78, 1.83, "Moreno", "Verde", "Blanco", false, "Estadounidense", 2, "Director")
let distributor2 = new Professional("Rose Evans", 43, "Femenino", 64, 1.55, "Pelirroja", "Marron", "Negra", true, "Estadounidense", 0, "distribuidor")
let writer2 = new Professional("Christopher Markus", 48, "Masculino", 76, 1.77, "Pelirrojo", "Verde", "Amarillo", false, "Canadiense", 3, "guionista")
let producer2 = new Professional("Trench Ruffalo", 73, "Masculino", 70, 1.73, "rubio", "Verde", "Amarillo", false, "Ingles", 3, "productor")
let actor1Movie2 = new Professional("Robert Downey Jr", 55, "Masculino", 71, 1.73, "Moreno", "Marron", "Blanco", false, "Estadounidense", 0, "actor")
let actor2Movie2 = new Professional("Chris Evans", 39, "Masculino", 82, 1.91, "Rubio", "Azul", "Blanco", false, "Estadounidense", 0, "actor")

let actors2 = [actor1Movie2, actor2Movie2]

//Metodos set movie 1
movie1.setActors(actors1);
movie1.setWriter(writer1);
movie1.setDistributor(distributor1);
movie1.setDirector(director1);
movie1.setProducer(producer1)
movie1.setGenre("drama");
movie1.setIsMCU(false);
movie1.setPlataform("Netflix");
movie1.setNationality("EEUU y Canada");
movie1.setLanguaje("ingles");
movie1.setMainCharacterName("Andrew Dufresne")
movie1.mostrarDatosPeliculas();


//Metodos set movie 2
movie2.setActors(actors2);
movie2.setWriter(writer2);
movie2.setDistributor(distributor2);
movie2.setDirector(director2);
movie2.setProducer(producer2)
movie2.setGenre("acción y drama");
movie2.setIsMCU(true);
movie2.setPlataform("Disney");
movie2.setNationality("EEUU");
movie2.setLanguaje("ingles");
movie2.setMainCharacterName("Tony Stark")
movie2.mostrarDatosPeliculas();

//Clase Imdb
let arrPelis = [movie1, movie2]
let imdb = new Imdb(arrPelis)
imdb.mostrarIMBD()

// JSON
console.log(JSON.stringify(imdb))

const fs=require('fs');

fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => {
  if (error)
    console.log(error);
  else
    console.log('El archivo fue creado');
});

console.log('última línea del programa');