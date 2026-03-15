import Piano from "./piano.js";
export default class WingPiano extends Piano {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        sound: string,
        numberOfKeys: number,
        length: number
    ) {
        super(model, manufacturer, color, sound, numberOfKeys)
    }
    makeSound(): void {
        console.log("Making wing piano sound")
    }
}