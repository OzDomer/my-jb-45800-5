import instrument from "./instrument.js"
export default class drum extends instrument {
    constructor(public readonly model: string,
        manufacturer: string,
        color: string,
        sound: string,) {
        super(model, manufacturer, color, sound)
    }
    makeSound(): void {
        console.log("Making drum sound")
    }
}