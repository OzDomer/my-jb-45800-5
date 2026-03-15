import instrument from "./instrument.js"
export default class piano extends instrument {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        sound: string,
        public readonly numberOfKeys: number
    ) {
        super(model, manufacturer, color, sound)
    }
    makeSound(): void {
        console.log("Making piano sound")
    }
}