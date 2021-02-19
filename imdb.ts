import { Movie } from "./Movie"
const fs = require('fs');


export class Imdb {
   
    public peliculas: Movie[]
    
    constructor(peliculas: Movie[]) {
        this.peliculas = peliculas
    }

    public mostrarIMBD() {
        for (let i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarDatosPeliculas()
        }
    }

    public escribirEnFicheroJSON(nombreFichero: string) {
        let imbd2 = JSON.stringify(this)
        fs.writeFileSync(nombreFichero, imbd2)
    }

    public obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        const fs = require('fs');
        let imdb33 = new Imdb([])
        fs.readFileSync(nombreFichero)
        //console.log(JSON.parse(fs.readFileSync("imdbBBDD.json")
        imdb33.peliculas=JSON.parse(fs.readFileSync(nombreFichero)).peliculas
        return imdb33
    }

}