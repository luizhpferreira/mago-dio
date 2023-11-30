class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.nivel = 1;
        this.pontosDeVida = 100;
        this.inventario = [];
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

    subirNivel() {
        this.nivel++;
        this.aumentarStats();
        console.log(`${this.nome} subiu para o nível ${this.nivel}`);
    }

    aumentarStats() {
        // Lógica para aumentar as estatísticas do herói ao subir de nível
    }

    sofrerDano(dano) {
        this.pontosDeVida -= dano;
        console.log(`${this.nome} sofreu ${dano} de dano. Pontos de Vida restantes: ${this.pontosDeVida}`);
        if (this.pontosDeVida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }

    curar(quantidade) {
        this.pontosDeVida += quantidade;
        console.log(`${this.nome} foi curado em ${quantidade} pontos. Pontos de Vida restantes: ${this.pontosDeVida}`);
    }

    adicionarItem(item) {
        this.inventario.push(item);
        console.log(`${this.nome} adquiriu ${item}.`);
    }

    mostrarInventario() {
        console.log(`${this.nome}'s Inventario: ${this.inventario.join(', ')}`);
    }
}

// Exemplo de uso:
const mago = new Heroi('Merlin', 100, 'mago');
mago.atacar();
mago.subirNivel();
mago.sofrerDano(20); 
mago.curar(10);
mago.adicionarItem('Pergaminho de Fogo');
mago.mostrarInventario();

const guerreiro = new Heroi('Conan', 35, 'guerreiro');
guerreiro.atacar();
guerreiro.sofrerDano(15);
guerreiro.curar(8);

const monge = new Heroi('Bruce Lee', 40, 'monge');
monge.atacar();
monge.adicionarItem('Poção de Cura');
monge.mostrarInventario();

const ninja = new Heroi('Hattori Hanzo', 30, 'ninja');
ninja.atacar();
ninja.adicionarItem('Estrela Ninja');
ninja.mostrarInventario();
