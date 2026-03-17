export default class Cat {
    constructor(
        public name: string,
        public readonly age: number,
        public readonly color: string,
        public readonly gender: string,
        public readonly isAlive: boolean,
    ) { }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`
    }
}