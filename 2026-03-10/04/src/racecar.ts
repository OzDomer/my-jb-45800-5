import Car from './car.js'

export default class Racecar extends Car {
    topSpeed: number
    numberOfRaces: number
    constructor(licensePlate: number, manufacturer: string, model: string, color: string, engineVolume: number, topSpeed: number, numberOfRaces: number) {
        super(licensePlate, manufacturer, model, color, engineVolume)
        this.topSpeed = topSpeed
        this.numberOfRaces = numberOfRaces
    }
    displayCarInformation() {
        console.log(`Car information\nLicense plate: ${this.licensePlate}\nManufacturer: ${this.manufacturer}\nModel: ${this.model}\nColor: ${this.color}\nEngine volume: ${this.engineVolume}\nTop speed: ${this.topSpeed}\nRaces: ${this.numberOfRaces}`)
    }
}