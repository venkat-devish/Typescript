class Coder {

    constructor(
        public readonly name: string,
        private age: number,
        protected lang: string,
        public music: string = 'Blues'
    ) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.music = music;
    }

    public getAge(): string {
        return `Hi Im ${this.age} years old!`
    }
}

const Venkat = new Coder('Venkat', 22, 'Spanish');
console.log(Venkat.getAge());

class WebDev extends Coder {
    constructor(
        public company: string,
        name: string,
        age: number,
        music: string
    ) {
        super(name, age, music)
    }

}

const venkat_dev = new WebDev('CTS', 'Venkat', 22, 'RNB');
console.log(venkat_dev);

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitar implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const player = new Guitar('VVSISHH', 'Guitar');
console.log(player.play('stringed'))
