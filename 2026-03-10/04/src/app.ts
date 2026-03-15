import Car from './car.js'
import Racecar from './racecar.js'

const toyota = new Car(11111, "Toyota", "Corolla", "White", 500)
const ferarri = new Racecar(11111, "Ferarri", "SF-26", "Red", 2500, 389, 32)
toyota.displayCarInformation()
ferarri.displayCarInformation()