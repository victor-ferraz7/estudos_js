const Personagem = function(nome) {
    this.nome = nome
    this.vida = 1000
    this.magia = 400
}

const yoda = new Personagem("Yoda")
console.log(`O nome do personagem é ${yoda.nome}, tem ${yoda.vida} de vida e ${yoda.magia} de poder mágico`)