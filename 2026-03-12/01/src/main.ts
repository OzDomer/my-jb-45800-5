import Drum from "./drum.js"
import Guitar from "./guitar.js"
import Piano from "./piano.js"
import WingPiano from "./wingPiano.js"
const drum = new Drum("Ludwig Vistalite", "ludwig", "white", "badumtss")
const guitar = new Guitar("Fender Stratocaster", "Fender Musical Instruments Corporation", "Red, white and black", "Crunchy, fuzzy, buzzy, nasty, roaring", 6)
const piano = new Piano("P-525", "Yamaha", "Wood", "Plink, plank, plunk", 88)
const wingPiano = new WingPiano(" Pictures at an Exhibition (Model D)", "Steinway & Sons", "White and gold", "KRAAAAANNNG!", 88, 274)
drum.displayInstrumentInformation()
guitar.displayInstrumentInformation()
piano.displayInstrumentInformation()
wingPiano.displayInstrumentInformation()
drum.makeSound()
guitar.makeSound()
piano.makeSound()
wingPiano.makeSound()
piano.test()
piano.tune()