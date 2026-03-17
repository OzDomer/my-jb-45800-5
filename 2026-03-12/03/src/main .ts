import Backup from "./backup.js"
import Cat from "./cat.js"
const sentence = new Backup("Sentence", "Glory Glory Man United")
const number = new Backup("Number", 69)
const boolean = new Backup("boolean", false)
const date = new Backup("Date", new Date)
const kitty = new Backup("Kitty cat", new Cat("Moshe", 32, "Black", "Binary", false))
sentence.display()
number.display()
boolean.display()
date.display()
kitty.display()
