let stringArr = ['one', 'venkat', 'day'];

let guitars = ['strat', 'Les Paul', 5150];

let mixedData = ['EVH', 2000, true]


let tuple: [string, number, boolean] = ['Venkat', 23, true]

let mixed = ['Surya', 24, false]

mixed = tuple

type Guitarist = {
    name: string,
    active?: boolean,
    albums?: (string | number)[]
}

//or

interface Guitarist_ {
    name?: string,
    active?: boolean,
    albums?: (string | number)[]
}

let artist: Guitarist = {
    name: 'Venkat',
    active: true,
    albums: ['Phases', 96]
}

let artist2: Guitarist_ = {
    active: true,
}

const greetTheArtist = (artist: Guitarist_) => {
    if (artist.name) {
        console.log(`Hi ${artist.name?.toUpperCase()}!`)
    }
    console.log(`Hello!`)

}

greetTheArtist(artist2)

//Enums

enum Grade {
    N = 1,
    S,
    A,
    B,
    C,
    D
}

console.log(Grade.B)
