import instrument from "./instrument.js"
import Tester from "./tester.js"
export default class piano extends instrument implements Tester {
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
    test(): void {
        console.log("testing piano")
    }
    tune(): void {
        console.log("tuning piano")
    }
}