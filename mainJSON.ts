import { Movie } from "./Movie"
import { Professional } from "./Professional"
import { Imdb } from "./imdb"
import { write } from "fs";
const fs = require('fs')
let JSONpeliculas;

//Mostrar por consola las preguntas para el usuario:
const prompt = require('prompt-sync')();
const titleDePeli: string = prompt('Cual es el titulo: ')
const anyoEstreno: number = prompt('Cual es el anyo de estreno: ')
const nacionalidadPeli: string = prompt('Cual es la nacionalidad: ')
const generoPeli = prompt('Cual es el genero: ')

//Objeto con los datos obtenidos del usuario:
let peliculon = new Movie(titleDePeli, anyoEstreno, nacionalidadPeli, generoPeli)
let imdbEmpty = new Imdb([])

//Introducir el objeto peliculon en el JSON:
imdbEmpty = imdbEmpty.obtenerInstanciaIMDB("imdbBBDD.json")
imdbEmpty.peliculas.push(peliculon)
imdbEmpty.escribirEnFicheroJSON("imdbBBDD.json")



