export class Professional {
    private name: string
    private age: number
    private genre: string
    private weight: number
    private height: number
    private hairColor: string
    private eyeColor: string
    private race: string
    private isRetired: boolean
    private nationality: string
    private oscarsNumber: number
    private profession: string

    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name
        this.age = age
        this.genre = genre
        this.weight = weight
        this.height = height
        this.hairColor = hairColor
        this.eyeColor = eyeColor
        this.race = race
        this.isRetired = isRetired
        this.nationality = nationality
        this.oscarsNumber = oscarsNumber
        this.profession = profession
    }
    //Metodo mostrar datos de todos los atributos
    public mostrarDatos() {
        console.log(" - Name: " + this.name)
        console.log(" - Age: " + this.age)
        console.log(" - Genre: " + this.genre)
        console.log(" - Weight: " + this.weight)
        console.log(" - Height: " + this.height)
        console.log(" - Hair color: " + this.hairColor)
        console.log(" - Eye color: " + this.eyeColor)
        console.log(" - Race: " + this.race)
        console.log(" - Is retired?: " + this.isRetired)
        console.log(" - Nationality: " + this.nationality)
        console.log(" - Oscars Number: " + this.oscarsNumber)
        console.log(" - Profession: " + this.profession)
        console.log("****************************")
    }
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getHairColor(): string {
        return this.hairColor;
    }

    public setHairColor(hairColor: string): void {
        this.hairColor = hairColor;
    }

    public getEyeColor(): string {
        return this.eyeColor;
    }

    public setEyeColor(eyeColor: string): void {
        this.eyeColor = eyeColor;
    }

    public getRace(): string {
        return this.race;
    }

    public setRace(race: string): void {
        this.race = race;
    }

    public getIsRetired(): boolean {
        return this.isRetired;
    }

    public setIsRetired(isRetired: boolean): void {
        this.isRetired = isRetired;
    }

    public getNationality(): string {
        return this.nationality;
    }

    public setNationality(nationality: string): void {
        this.nationality = nationality;
    }

    public getOscarsNumber(): number {
        return this.oscarsNumber;
    }

    public setOscarsNumber(oscarsNumber: number): void {
        this.oscarsNumber = oscarsNumber;
    }

    public getProfession(): string {
        return this.profession;
    }

    public setProfession(profession: string): void {
        this.profession = profession;
    }

}