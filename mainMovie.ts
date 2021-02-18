import{Movie} from "./Movie"
import { Professional } from "./Professional"
//profesionales
let profesionalcito1 = new Professional("Pablo",33,"Masculino",68,1.83,"Rubio","Azul","Blanco",false,"Espanyol",3,"Actor")
let profesionalcito2 = new Professional("Luis",43,"Masculino",88,1.89,"Catanyo","Marron","Negro",true,"Noruego",3,"Manager")
let profesionalcito3 = new Professional("Julian",53,"Masculino",98,1.53,"Pelirrojo","Verde","Amarillo",false,"Espanyol",3,"Producer")
let profesionalArr = [profesionalcito1,profesionalcito2,profesionalcito3]
//Movies
let movie1 = new Movie("Cadena Perpetua", 1994, "EEUU", "drama");
let movie2 = new Movie("The gentlemen", 2020, "UK", "accion");
let movie3 = new Movie("Soul", 2020, "EEUU", "animacion");
let movie4 = new Movie("La trinchera infinita", 2019, "España", "drama");
let movie5 = new Movie("Vengadores: infinity war", 2018, "EEUU", "accion")


//Metodos set
movie1.setActors(profesionalArr);
movie1.setWriter(profesionalcito2);
movie1.setDistributor(profesionalcito3);
movie1.setDirector(profesionalcito2);
movie1.setProducer(profesionalcito1)
movie1.setGenre("drama");
movie1.setIsMCU(true);
movie1.setPlataform("Netflix");

//Mostrar metodos
movie1.mostrarDatosPeliculas();
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



