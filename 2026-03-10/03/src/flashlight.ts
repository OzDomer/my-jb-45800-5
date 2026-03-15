export default class flashlight {
    color: string
    length: number
    brightnessLevel: number
    numberOfBatteries: number
    constructor(color: string, length: number, brightnessLevel: number, numberOfBatteries: number) {
        this.color = color
        this.length = length
        this.brightnessLevel = brightnessLevel
        this.numberOfBatteries = numberOfBatteries
    }
    turnOnFlashlight() {
        console.log(`The ${this.color} flashlight has been turned on!`)
    }
    turnOffFlashlight() {
        console.log(`The ${this.color} flashlight has been turned off!`)
    }
    switchBatteries() {
        console.log(`Switching batteries for the ${this.color} flashlight!`)
    }
    showFlashlightInfo() {
        console.log(`Flashlight information:\nColor: ${this.color}\nLength: ${this.length}\nBrightness level: ${this.brightnessLevel}\nNumber of Batteries: ${this.numberOfBatteries}`)
    }

}