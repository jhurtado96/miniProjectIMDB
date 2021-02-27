"use strict";

var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.mostrarIMBD = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].mostrarDatosPeliculas();
        }
    };
    // public escribirEnFicheroJSON(nombreFichero: string) {
    //     let imbd2 = JSON.stringify(this)
    //     fs.writeFileSync(nombreFichero, imbd2)
    // }
    Imdb.prototype.obtenerInstanciaIMDB = function (nombreFichero) {
        var fs = require('fs');
        var imdb = new Imdb([]);
        fs.readFileSync(nombreFichero);
        imdb.peliculas = JSON.parse(fs.readFileSync(nombreFichero)).peliculas;
        return imdb;
    };
    return Imdb;
}());

var Movie = /** @class */ (function () {
    function Movie(tittle, releaseYear, nationality, genre, foto) {
        this.title = tittle;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.foto = foto
    }
    //Metodos:
    Movie.prototype.getFoto = function () {
        return this.foto;
    }
    Movie.prototype.setFoto = function (foto) {
        this.foto = foto;
    };
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Movie.prototype.getActors = function () {
        return this.actors;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.getNationality = function () {
        return this.nationality;
    };
    Movie.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.getWriter = function () {
        return this.writer;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.getLanguaje = function () {
        return this.languaje;
    };
    Movie.prototype.setLanguaje = function (languaje) {
        this.languaje = languaje;
    };
    Movie.prototype.getPlataform = function () {
        return this.plataform;
    };
    Movie.prototype.setPlataform = function (plataform) {
        this.plataform = plataform;
    };
    Movie.prototype.isIsMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.getMainCharacterName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.getProducer = function () {
        return this.producer;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.getGenre = function () {
        return this.genre;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };

    Movie.prototype.stringDatosPelicula = function () {
        let datosPeli ="- "+ this.nationality + "<br>" + "- "+ this.genre + "<br>" + "- "+ this.releaseYear  
        return datosPeli
    }

    Movie.prototype.mostrarDatosPeliculas = function () {
        console.log("*******************************");
        console.log("Peliculas: ");
        console.log("Tittle: " + this.title);
        console.log("Release year: " + this.releaseYear);
        console.log("Actors: ");
        for (var i = 0; i < this.getActors().length; i++) {
            this.getActors()[i].mostrarDatos();
        }
        console.log("Nacionality: " + this.nationality);
        console.log("Director: ");
        this.director.mostrarDatos();
        console.log("Writer: ");
        this.writer.mostrarDatos();
        console.log("Language: " + this.languaje);
        console.log("Plataform: " + this.plataform);
        console.log("Is MCU?: " + this.isMCU);
        console.log("Main character name: " + this.mainCharacterName);
        console.log("Producer: ");
        this.producer.mostrarDatos();
        console.log("Distributor: ");
        this.distributor.mostrarDatos();
        console.log("Genre: " + this.genre);
        console.log("*******************************");
    };
    return Movie;
}());

var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, foto) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;
    }
    Professional.prototype.stringDatosProfesional = function () {

    }
    //Metodo mostrar datos de todos los atributos
    Professional.prototype.mostrarDatos = function () {
        console.log(" - Name: " + this.name);
        console.log(" - Age: " + this.age);
        console.log(" - Genre: " + this.genre);
        console.log(" - Weight: " + this.weight);
        console.log(" - Height: " + this.height);
        console.log(" - Hair color: " + this.hairColor);
        console.log(" - Eye color: " + this.eyeColor);
        console.log(" - Race: " + this.race);
        console.log(" - Is retired?: " + this.isRetired);
        console.log(" - Nationality: " + this.nationality);
        console.log(" - Oscars Number: " + this.oscarsNumber);
        console.log(" - Profession: " + this.profession);
        console.log("****************************");
    };
    Professional.prototype.getFoto = function () {
        return this.foto;
    };
    Professional.prototype.setFoto = function (foto) {
        this.foto = foto;
    };
    Professional.prototype.getName = function () {
        return this.name;
    };
    Professional.prototype.setName = function (name) {
        this.name = name;
    };
    Professional.prototype.getAge = function () {
        return this.age;
    };
    Professional.prototype.setAge = function (age) {
        this.age = age;
    };
    Professional.prototype.getGenre = function () {
        return this.genre;
    };
    Professional.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Professional.prototype.getWeight = function () {
        return this.weight;
    };
    Professional.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Professional.prototype.getHeight = function () {
        return this.height;
    };
    Professional.prototype.setHeight = function (height) {
        this.height = height;
    };
    Professional.prototype.getHairColor = function () {
        return this.hairColor;
    };
    Professional.prototype.setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };
    Professional.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    Professional.prototype.setEyeColor = function (eyeColor) {
        this.eyeColor = eyeColor;
    };
    Professional.prototype.getRace = function () {
        return this.race;
    };
    Professional.prototype.setRace = function (race) {
        this.race = race;
    };
    Professional.prototype.getIsRetired = function () {
        return this.isRetired;
    };
    Professional.prototype.setIsRetired = function (isRetired) {
        this.isRetired = isRetired;
    };
    Professional.prototype.getNationality = function () {
        return this.nationality;
    };
    Professional.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Professional.prototype.getOscarsNumber = function () {
        return this.oscarsNumber;
    };
    Professional.prototype.setOscarsNumber = function (oscarsNumber) {
        this.oscarsNumber = oscarsNumber;
    };
    Professional.prototype.getProfession = function () {
        return this.profession;
    };
    Professional.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    return Professional;
}());

//profesionales movie1
var director1 = new Professional("Frank Darabont", 33, "Masculino", 68, 1.83, "Rubio", "Azul", "Blanco", false, "Estadounidense", 3, "Director","");
var distributor1 = new Professional("Luis", 43, "Masculino", 88, 1.89, "Catanyo", "Marron", "Negro", true, "Noruego", 1, "distribuidor");
var writer1 = new Professional("Stephen King", 53, "Masculino", 98, 1.93, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 2, "guionista");
var producer1 = new Professional("John Steward", 53, "Masculino", 75, 1.73, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 0, "productor");
var actor1Movie1 = new Professional("Tim Robbins", 62, "Masculino", 70, 1.75, "Castanyo", "Verde", "Blanco", false, "estadounidense", 3, "actor");
var actor2Movie1 = new Professional("Morgan Freeman", 83, "Masculino", 81, 1.90, "Gris", "Marron", "Negro", false, "Estadounidense", 1, "actor");

//Profesionales movie2
var director2 = new Professional("Anthony Russo", 43, "Masculino", 78, 1.83, "Moreno", "Verde", "Blanco", false, "Estadounidense", 2, "Director");
var distributor2 = new Professional("Rose Evans", 43, "Femenino", 64, 1.55, "Pelirroja", "Marron", "Negra", true, "Estadounidense", 0, "distribuidor");
var writer2 = new Professional("Christopher Markus", 48, "Masculino", 76, 1.77, "Pelirrojo", "Verde", "Amarillo", false, "Canadiense", 3, "guionista");
var producer2 = new Professional("Trench Ruffalo", 73, "Masculino", 70, 1.73, "rubio", "Verde", "Amarillo", false, "Ingles", 3, "productor");
var actor1Movie2 = new Professional("Robert Downey Jr", 55, "Masculino", 71, 1.73, "Moreno", "Marron", "Blanco", false, "Estadounidense", 0, "actor");
var actor2Movie2 = new Professional("Chris Evans", 39, "Masculino", 82, 1.91, "Rubio", "Azul", "Blanco", false, "Estadounidense", 0, "actor");

//Movie 1
var movie1 = new Movie("Cadena Perpetua", 1994, "EEUU", "drama", "https://online.tucineclasico.es/wp-content/uploads/2020/08/dc1fX265fZIIY5Hab8I7CdETyJy-200x300.jpg");
var actors1 = [actor1Movie1, actor2Movie1];
//Movie2
var movie2 = new Movie("Vengadores: infinity war", 2018, "EEUU", "accion","https://clarovideocdn9.clarovideo.net/PELICULAS/AVENGERSTHE/EXPORTACION_WEB/SS/AVENGERSTHEWVERTICAL.jpg?size=200x300");
var movie3 = new Movie("Origen", 2016, "Californa", "Ficcion","https://libreriadelau.vteximg.com.br/arquivos/ids/17988109-200-300/origen-9789584261625-plan.jpg?v=637425978743800000");
var movie4 = new Movie("Seven", 2002, "Washington", "accion","https://filmdiario.files.wordpress.com/2016/04/11166782_800.jpg?w=200&h=300");
var movie5 = new Movie("Malditos Bastardos", 2001, "Francia", "accion","https://pelis28.net/wp-content/uploads/2020/02/dqu7nUtKTLdpM7DaJvD4zcSXhn1-200x300.jpg");
var movie6 = new Movie("Harry Potter", 2005, "England", "fantastica","http://blogs.colgate.edu/bookstore/files/2016/07/harry-potter-and-the-prisoner-of-azkaban.11669-200x300.jpg");
var movie7 = new Movie
//Profesionales Movie2
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
// movie1.mostrarDatosPeliculas();
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




var arrPelis = [movie1, movie2,movie3,movie4,movie5,movie6];

let str = ""
$(document).ready(function () {
    
    for(let i = 0;i<arrPelis.length;i++){
        str = '<div class="image-poster">'+
        '<div class="movie-image" ><img id="imagenPelicula" src="'+arrPelis[i].getFoto()+'" alt="" class="zoom">'+
        '<div class="movie-info">'+
        '<h2 id="titulo" class="movie-title">'+arrPelis[i].getTitle()+'</h2>'+
        '<p id="datosPelicula" class="movie-sinopsis">'+arrPelis[i].stringDatosPelicula()+'</p><div class="links"><a id="mostrarActores"  class="watch" href="ver" >Ver</a>'+
                '<a class="down" href="down" >Descargar</a>'+
            '</div></div></div></div>'


    $("#cartasPeliculas").append(str)
    }

});



function mostrarLanuevaPelicula(){
    let titulito= $("#tit").val()     
        let anyito=$("#ano").val()
        let genero=$("#gen").val()
        let pais=$("#pais").val()
        let foto=$("#imagencita").val()
    let peliculaNueva = new Movie(titulito,anyito,genero,pais,foto)
        arrPelis.push(peliculaNueva)
        console.log(arrPelis)
    let str2 =""
    $(document).ready(function () {
    
        
            str2 = '<div class="image-poster">'+
            '<div class="movie-image" ><img id="imagenPelicula" src="'+peliculaNueva.getFoto()+'" alt="" class="zoom">'+
            '<div class="movie-info">'+
            '<h2 id="titulo" class="movie-title">'+peliculaNueva.getTitle()+'</h2>'+
            '<p id="datosPelicula" class="movie-sinopsis">'+peliculaNueva.stringDatosPelicula()+'</p><div class="links"><a id="mostrarActores"  class="watch" href="ver" >Ver</a>'+
                    '<a class="down" href="down" >Descargar</a>'+
                '</div></div></div></div>'
    
    
        $("#cartasPeliculas").append(str2)
        }
    
    );
}






