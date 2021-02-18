import{Movie} from "./Movie"
import { Professional } from "./Professional"
let profesionalcito1 = new Professional("Pablo",33,"Masculino",68,1.83,"Rubio","Azul","Blanco",false,"Espanyol",3,"Actor")
let profesionalcito2 = new Professional("Luis",43,"Masculino",88,1.89,"Catanyo","Marron","Negro",true,"Noruego",3,"Manager")
let profesionalcito3 = new Professional("Julian",53,"Masculino",98,1.53,"Pelirrojo","Verde","Amarillo",false,"Espanyol",3,"Producer")


let movie1 = new Movie("Cadena Perpetua", 1994, "EEUU", "drama");
let movie2 = new Movie("The gentlemen", 2020, "UK", "accion");
let movie3 = new Movie("Soul", 2020, "EEUU", "animacion");
let movie4 = new Movie("La trinchera infinita", 2019, "España", "drama");
let movie5 = new Movie("Vengadores: infinity war", 2018, "EEUU", "accion")

movie1.mostrarDatosPeliculas();
movie2.mostrarDatosPeliculas();
movie3.mostrarDatosPeliculas();
movie4.mostrarDatosPeliculas();
movie5.mostrarDatosPeliculas();
console.log("Metodos Get")
console.log(movie1.getTitle());
console.log(movie2.getTitle());
console.log(movie3.getReleaseYear());
console.log(movie4.getActors());
console.log(movie4.getDirector());
console.log(movie2.getWriter());
console.log(movie2.getLanguaje());
console.log(movie1.getDistributor());
console.log(movie3.getGenre());
console.log(movie3.getMainCharacterName())

console.log("Metodos Set")
movie5.setIsMCU(true);
console.log(movie5.mostrarDatosPeliculas())
console.log(movie2.mostrarDatosPeliculas())
console.log(movie3.mostrarDatosPeliculas())
movie2.setPlataform("Netflix");
console.log(movie2.getPlataform())
movie1.setGenre("drama");
console.log(movie1.getGenre())
movie2.setLanguaje("ingles")
console.log(movie2.getLanguaje());
movie2.setWriter(profesionalcito2);
console.log(movie2.getWriter())