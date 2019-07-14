class Jogador {
    constructor (nome,idade){
        this.nome = nome
        this.idade = idade
        this.league = 'NBA'
    }
}

const kobe = new Jogador("Kobe","30")
console.log(`O jogador ${kobe.nome} tem ${kobe.idade} e joga na ${kobe.league}`)