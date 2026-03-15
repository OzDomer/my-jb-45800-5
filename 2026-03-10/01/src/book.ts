export default class book {
    name: string
    author: string
    publishing: string
    price: number

    constructor(name: string, author: string, publishing: string, price: number) {
        this.name = name
        this.author = author
        this.publishing = publishing
        this.price = price
    }


    showBookInformation() {
        console.log(
            `Book bane: ${this.name}
            Author name: ${this.author}
            Publishing: ${this.publishing}
            Price: ${this.price}`)
    }
    VatAmount() {
        return this.price * 0.17
    }
}