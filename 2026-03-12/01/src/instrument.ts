export default abstract class instrument {
    constructor(
        public readonly model: string,
        public readonly manufacturer: string,
        public color: string,
        public readonly sound: string,
    ) { }
    displayInstrumentInformation() {
        Object.entries(this).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    }
    abstract makeSound(): void
}