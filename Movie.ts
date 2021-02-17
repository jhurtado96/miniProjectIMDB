import {Professional} from "./Professional"

export class Movie{
    private title:string
    private releaseYear:number
    private actors:Professional[]
    private nationality:string
    private director:Professional
    private writer:Professional
    private languaje:string
    private plataform:string
    private isMCU:boolean
    private mainCharacterName:string
    private producer:Professional
    private distributor:Professional
    private genre:string

    constructor(tittle:string,releaseYear:number,nationality:string,genre:string){
        this.title=tittle
        this.releaseYear=releaseYear
        this.nationality=nationality
        this.genre=genre
    }

    public mostrarDatosPeliculas(){
        console.log("Peliculas: ")
        console.log("Tittle: "+ this.title)
        console.log("Release year: "+this.releaseYear)
        console.log("")
    }


}