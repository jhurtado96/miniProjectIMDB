"use strict";
exports.__esModule = true;
var fs = require('fs');
var JSONpeliculas;
JSONpeliculas = JSON.parse(fs.readFileSync("./imdbBBDD.json"));
console.log(JSONpeliculas);
var jason = { "peliculas": [{ "title": "Cadena Perpetua", "releaseYear": 1994, "nationality": "EEUU y Canada", "genre": "drama",
            "actors": [{ "name": "Tim Robbins", "age": 62, "genre": "Masculino", "weight": 70, "height": 1.75, "hairColor": "Castanyo", "eyeColor": "Verde", "race": "Blanco", "isRetired": false, "nationality": "estadounidense", "oscarsNumber": 3, "profession": "actor" },
                { "name": "Morgan Freeman", "age": 83, "genre": "Masculino", "weight": 81, "height": 1.9, "hairColor": "Gris", "eyeColor": "Marron", "race": "Negro", "isRetired": false, "nationality": "Estadounidense", "oscarsNumber": 1, "profession": "actor" }],
            "writer": { "name": "Stephen King", "age": 53, "genre": "Masculino", "weight": 98, "height": 1.93, "hairColor": "Pelirrojo", "eyeColor": "Verde", "race": "Amarillo", "isRetired": false, "nationality": "Espanyol", "oscarsNumber": 2, "profession": "guionista" },
            "distributor": { "name": "Luis", "age": 43, "genre": "Masculino", "weight": 88, "height": 1.89, "hairColor": "Catanyo", "eyeColor": "Marron", "race": "Negro", "isRetired": true, "nationality": "Noruego", "oscarsNumber": 1, "profession": "distribuidor" },
            "director": { "name": "Frank Darabont", "age": 33, "genre": "Masculino", "weight": 68, "height": 1.83, "hairColor": "Rubio", "eyeColor": "Azul", "race": "Blanco", "isRetired": false, "nationality": "Estadounidense", "oscarsNumber": 3, "profession": "Director" },
            "producer": { "name": "John Steward", "age": 53, "genre": "Masculino", "weight": 75, "height": 1.73, "hairColor": "Pelirrojo", "eyeColor": "Verde", "race": "Amarillo", "isRetired": false, "nationality": "Espanyol", "oscarsNumber": 0, "profession": "productor" },
            "isMCU": false, "plataform": "Netflix", "languaje": "ingles", "mainCharacterName": "Andrew Dufresne" },
        { "title": "Vengadores: infinity war", "releaseYear": 2018, "nationality": "EEUU", "genre": "acción y drama",
            "actors": [{ "name": "Robert Downey Jr", "age": 55, "genre": "Masculino", "weight": 71, "height": 1.73, "hairColor": "Moreno", "eyeColor": "Marron", "race": "Blanco", "isRetired": false, "nationality": "Estadounidense", "oscarsNumber": 0, "profession": "actor" },
                { "name": "Chris Evans", "age": 39, "genre": "Masculino", "weight": 82, "height": 1.91, "hairColor": "Rubio", "eyeColor": "Azul", "race": "Blanco", "isRetired": false, "nationality": "Estadounidense", "oscarsNumber": 0, "profession": "actor" }],
            "writer": { "name": "Christopher Markus", "age": 48, "genre": "Masculino", "weight": 76, "height": 1.77, "hairColor": "Pelirrojo", "eyeColor": "Verde", "race": "Amarillo", "isRetired": false, "nationality": "Canadiense", "oscarsNumber": 3, "profession": "guionista" },
            "distributor": { "name": "Rose Evans", "age": 43, "genre": "Femenino", "weight": 64, "height": 1.55, "hairColor": "Pelirroja", "eyeColor": "Marron", "race": "Negra", "isRetired": true, "nationality": "Estadounidense", "oscarsNumber": 0, "profession": "distribuidor" },
            "director": { "name": "Anthony Russo", "age": 43, "genre": "Masculino", "weight": 78, "height": 1.83, "hairColor": "Moreno", "eyeColor": "Verde", "race": "Blanco", "isRetired": false, "nationality": "Estadounidense", "oscarsNumber": 2, "profession": "Director" },
            "producer": { "name": "Trench Ruffalo", "age": 73, "genre": "Masculino", "weight": 70, "height": 1.73, "hairColor": "rubio", "eyeColor": "Verde", "race": "Amarillo", "isRetired": false, "nationality": "Ingles", "oscarsNumber": 3, "profession": "productor" },
            "isMCU": true, "plataform": "Disney", "languaje": "ingles", "mainCharacterName": "Tony Stark" }] };
// console.log(JSONpeliculas.async function name(params:type) {
// })
console.log(JSONpeliculas.peliculas[0].title);
