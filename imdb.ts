import { Movie } from "./Movie"

export class Imdb {
    public peliculas: Movie[]
    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas
    }

   public mostrarIMBD(){
       for(let i = 0; i<this.peliculas.length;i++){
            this.peliculas[i].mostrarDatosPeliculas()
       }
   }

}