const personagem = {
    nome: "Mário",
    arma: "Tartaruga",
    dizNomeEataca(){
        console.log(this.nome.toUpperCase())

        globalThis.setTimeout(() =>{
            console.log(`${this.nome} pega sua ${this.arma} e ataca`)
        }, 500)
    }
}

personagem.dizNomeEataca()