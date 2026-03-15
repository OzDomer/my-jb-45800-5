import instrument from "./instrument.js";
export default class guitar extends instrument {
    constructor(
        model: string,
        manufacturer: string,
        color: string,
        sound: string,
        public readonly numberOfStrings: number

    ) {
        super(model, manufacturer, color, sound);
    }
    makeSound(): void {
        console.log("Making guitar sound")
    }
}