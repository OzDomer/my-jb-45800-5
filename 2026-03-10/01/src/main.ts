import Book from './book.js'

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", " Bloomsbury Publishing", 100)
const book2 = new Book("The Fellowship of the Ring", "J. R. R. Tolkien", "George Allen & Unwin", 150)
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "the Scribner imprint", 200)

book1.showBookInformation()
console.log(book1.VatAmount())

book2.showBookInformation()
console.log(book2.VatAmount())

book3.showBookInformation()
console.log(book3.VatAmount())
