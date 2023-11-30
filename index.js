class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const mago = new Heroi('Merlin', 100, 'mago');
mago.atacar();

const guerreiro = new Heroi('Conan', 35, 'guerreiro');
guerreiro.atacar();

const monge = new Heroi('Bruce Lee', 40, 'monge');
monge.atacar();

const ninja = new Heroi('Hattori Hanzo', 30, 'ninja');
ninja.atacar();
