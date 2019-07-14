
// Regra 1: Se a função é chamada como um método de um Objeto (Obj Mãe, no exemplo)
// isso é, com notação de ponto (função falaNome() chamada na linha 13) o valor de this
// dentro da função é o que estiver antes do ponto (no exemplo, o valor de this é mae)


const mae = {
    nome: "Denise",
    falaNome(){
        console.log(this.nome)
    }
}

mae.falaNome()