interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details ;
}
 
interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const {song:anotherSong,details } = audioPlayer
const {author} = details;


// console.log('Song', anotherSong,'Author', author);


const [ , , Trunks = 'El personaje no existe']: string[] = ['Goku','Vegeta']

console.log('El personaje que quiero es: ', Trunks)


export{}