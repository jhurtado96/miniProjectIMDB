import { Movie } from "./Movie"
import { Professional } from "./Professional"
import { Imdb } from "./imdb"
import { write } from "fs";
const fs=require('fs')
let JSONpeliculas;


        
        
        const prompt = require('prompt-sync')();
        const titleDePeli:string = prompt('Cual es el titulo')
        const anyoEstreno:number = prompt('Cual es el anyo de estreno')
        const nacionalidadPeli:string = prompt('Cual es la nacionalidad')
        const generoPeli = prompt('Cual es el genero')

        let peliculon =  new Movie(titleDePeli,anyoEstreno,nacionalidadPeli,generoPeli)
        //Tengo JSON de peliculas
        // JSONpeliculas = JSON.parse(fs.readFileSync("./imdbBBDD.json"))
        // Objeto a JSON
        let imdbEmpty = new Imdb([])
    imdbEmpty = imdbEmpty.obtenerInstanciaIMDB("imdbBBDD.json")
imdbEmpty.peliculas.push(peliculon)
imdbEmpty.escribirEnFicheroJSON("imdbBBDD.json")
//       let peliculon1= JSON.stringify(peliculon)
//         fs.writeFileSync("jsondePelicula.json",peliculon1)
        
//         let peliculonJSON = JSON.parse(fs.readFileSync("jsondePelicula.json"))

        
//         JSONpeliculas.peliculas.push([peliculonJSON])
        
        

     
