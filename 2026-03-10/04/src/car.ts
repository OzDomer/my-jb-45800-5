export default class car {
    licensePlate: number
    readonly manufacturer: string
    readonly model: string
    color: string
    engineVolume: number


    constructor(licensePlate: number, manufacturer: string, model: string, color: string, engineVolume: number) {
        this.licensePlate = licensePlate
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
        this.engineVolume = engineVolume
    }
    displayCarInformation() {
        console.log(`Car information\nLicense plate: ${this.licensePlate}\nManufacturer: ${this.manufacturer}\nModel: ${this.model}\nColor: ${this.color}\nEngine volume: ${this.engineVolume}`)
    }
}