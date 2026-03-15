export default class speaker {
    color: string
    volume: number

    constructor(color: string, volume: number) {
        this.color = color
        this.volume = volume
    }

    turnOnSpeaker() {
        console.log(`The speaker with the color: ${this.color} has been turned on!`)
    }
    turnOffSpeaker() {
        console.log(`The speaker with the color: ${this.color} has been turned off!`)
    }
    checkVolume() {
        console.log(`The speaker with the color: ${this.color} is on: ${this.volume} volume!`)
    }
    showSpeakerInfo() {
        console.log(
            `Speaker color: ${this.color}\nSpeaker volume: ${this.volume}`)
    }
}