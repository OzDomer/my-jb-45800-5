export default class Backup<T> {
    constructor(
        public subject: string,
        public value: T) { }
    display() {
        console.log(`${this.value}`)
    }
}