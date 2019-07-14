globalThis.nomeDoDono = "Vitão"

const falaNomeDoPai = function(){
    console.log(`Quem é o Pai ? R: É o ${this.nomeDoDono} !`)
}

falaNomeDoPai()