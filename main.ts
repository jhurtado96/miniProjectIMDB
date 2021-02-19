import { Professional } from "./Professional"
//profesionales movie1
let director1 = new Professional("Frank Darabont", 33, "Masculino", 68, 1.83, "Rubio", "Azul", "Blanco", false, "Estadounidense", 3, "Director")
let distributor1 = new Professional("Luis", 43, "Masculino", 88, 1.89, "Catanyo", "Marron", "Negro", true, "Noruego", 1, "distribuidor")
let writer1 = new Professional("Stephen King", 53, "Masculino", 98, 1.93, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 2, "guionista")
let producer1 = new Professional("John Steward", 53, "Masculino", 75, 1.73, "Pelirrojo", "Verde", "Amarillo", false, "Espanyol", 0, "productor")
let actor1Movie1 = new Professional("Tim Robbins", 62, "Masculino", 70, 1.75, "Castanyo", "Verde", "Blanco", false, "estadounidense", 3, "actor")
let actor2Movie1 = new Professional("Morgan Freeman", 83, "Masculino", 81, 1.90, "Gris", "Marron", "Negro", false, "Estadounidense", 1, "actor")

//Metodo mostrar propiedades de professional
director1.mostrarDatos()
distributor1.mostrarDatos()
writer1.mostrarDatos()
producer1.mostrarDatos()
actor1Movie1.mostrarDatos()
actor2Movie1.mostrarDatos()

//Profesionales movie2
let director2 = new Professional("Anthony Russo", 43, "Masculino", 78, 1.83, "Moreno", "Verde", "Blanco", false, "Estadounidense", 2, "Director")
let distributor2 = new Professional("Rose Evans", 43, "Femenino", 64, 1.55, "Pelirroja", "Marron", "Negra", true, "Estadounidense", 0, "distribuidor")
let writer2 = new Professional("Christopher Markus", 48, "Masculino", 76, 1.77, "Pelirrojo", "Verde", "Amarillo", false, "Canadiense", 3, "guionista")
let producer2 = new Professional("Trench Ruffalo", 73, "Masculino", 70, 1.73, "rubio", "Verde", "Amarillo", false, "Ingles", 3, "productor")
let actor1Movie2 = new Professional("Robert Downey Jr", 55, "Masculino", 71, 1.73, "Moreno", "Marron", "Blanco", false, "Estadounidense", 0, "actor")
let actor2Movie2 = new Professional("Chris Evans", 39, "Masculino", 82, 1.91, "Rubio", "Azul", "Blanco", false, "Estadounidense", 0, "actor")

//Metodo mostrar propiedades de professional
director2.mostrarDatos()
distributor2.mostrarDatos()
writer2.mostrarDatos()
producer2.mostrarDatos()
actor1Movie2.mostrarDatos()
actor2Movie2.mostrarDatos()
