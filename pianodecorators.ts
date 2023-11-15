import { ColorPlayer, Color } from "./decorators";

@ColorPlayer("48% 0.27 274 / 1", (color: any) => console.log(color))

class Piano {
    @Color("L", "10%")
    playA(octave) {
        console.log("A" +  octave);        
    }

    @Color("C", "0.15")
    playB(octave) {
        console.log("B" + octave)
    }

    @Color("H", "0.03")
    playC(octave) {
        console.log("C" + octave);
    }

    @Color("L", "10%")
    playD(octave) { }

    @Color("C", "0.15")
    playE(octave) { }

    @Color("H", "0.1")
    playF(octave) { }

    @Color("a", "0.4")
    playG(octave) { }
}

const piano = new Piano(); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playA(2) // console.log("38.00% 0.27 274.00 / 1.00")
piano.playA(4) // console.log("48.00% 0.27 274.00 / 1.00")
piano.playB(3) // console.log("48.00% 0.27 274.00 / 1.00")
console.log('-------------------------------------')
const piano2 = new Piano(); // console.log("48.00% 0.27 274.00 / 1.00")
piano2.playA(2) // console.log("38.00% 0.27 274.00 / 1.00")
piano2.playA(4) // console.log("48.00% 0.27 274.00 / 1.00")
piano2.playB(3) // console.log("48.00% 0.27 274.00 / 1.00")