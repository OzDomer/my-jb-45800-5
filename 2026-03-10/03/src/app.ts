import flashlight from "./flashlight.js"

const flashlight1 = new flashlight("Black", 40, 3, 2)
const flashlight2 = new flashlight("white", 100, 5, 8)

flashlight1.showFlashlightInfo()
flashlight1.turnOnFlashlight()
flashlight1.switchBatteries()
flashlight1.turnOffFlashlight()
flashlight2.showFlashlightInfo()
flashlight2.turnOnFlashlight()
flashlight2.switchBatteries()
flashlight2.turnOffFlashlight()