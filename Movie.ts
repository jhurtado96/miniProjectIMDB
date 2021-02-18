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

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public setReleaseYear(releaseYear: number): void {
        this.releaseYear = releaseYear;
    }

    public getActors(): Professional[] {
        return this.actors;
    }

    public setActors(actors: Professional[]): void {
        this.actors = actors;
    }

    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }

    public getDirector(): Professional {
        return this.director;
    }

    public setDirector(director: Professional): void {
        this.director = director;
    }

    public getWriter(): Professional {
        return this.writer;
    }

    public setWriter(writer: Professional): void {
        this.writer = writer;
    }

    public getLanguaje(): string {
        return this.languaje;
    }

    public setLanguaje(languaje: string): void {
        this.languaje = languaje;
    }

    public getPlataform(): string {
        return this.plataform;
    }

    public setPlataform(plataform: string): void {
        this.plataform = plataform;
    }

    public isIsMCU(): boolean {
        return this.isMCU;
    }

    public setIsMCU(isMCU: boolean): void {
        this.isMCU = isMCU;
    }

    public getMainCharacterName(): string {
        return this.mainCharacterName;
    }

    public setMainCharacterName(mainCharacterName: string): void {
        this.mainCharacterName = mainCharacterName;
    }

    public getProducer(): Professional {
        return this.producer;
    }

    public setProducer(producer: Professional): void {
        this.producer = producer;
    }

    public getDistributor(): Professional {
        return this.distributor;
    }

    public setDistributor(distributor: Professional): void {
        this.distributor = distributor;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }


    constructor(tittle:string,releaseYear:number,nationality:string,genre:string){
        this.title=tittle
        this.releaseYear=releaseYear
        this.nationality=nationality
        this.genre=genre
    }

    public mostrarDatosPeliculas(){
        console.log("*******************************")
        console.log("Peliculas: ")
        console.log("Tittle: "+ this.title)
        console.log("Release year: "+this.releaseYear)
        console.log("Actors: ")
        for(let i = 0; i<this.getActors().length;i++){
            
                this.getActors()[i].mostrarDatos()
            
        }
        console.log("Nacionality: "+this.nationality)
        console.log("Director: ")
         this.director.mostrarDatos()
        console.log("Writer: ")
        this.writer.mostrarDatos()
        console.log("Language: " + this.languaje)
        console.log("Plataform: " +this.plataform)
        console.log("Is MCU?: " +this.isMCU)
        console.log("Main character name: "+this.mainCharacterName)
        console.log("Producer: ") 
        this.producer.mostrarDatos()
        console.log("Distributor: ")
        this.distributor.mostrarDatos()
        console.log("Genre: "+ this.genre)
        console.log("*******************************")
    }


}