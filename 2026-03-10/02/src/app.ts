import Speaker from "./speaker.js";

const speaker1 = new Speaker("Black", 69)
const speaker2 = new Speaker("white", 100)
speaker1.turnOnSpeaker()
speaker1.checkVolume()
speaker1.showSpeakerInfo()
speaker1.turnOffSpeaker()
speaker2.turnOnSpeaker()
speaker2.checkVolume()
speaker2.showSpeakerInfo()
speaker2.turnOffSpeaker()