
var nome = "Victor"

function mudaNome(){
    var nome = "Alex"
    console.log(`Escopo da Função = ${nome}`)
}

mudaNome()

console.log(`Escopo global = ${nome}`)