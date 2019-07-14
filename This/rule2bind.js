// Regra 2: Usando o Bind, apply & call, o valor de THIS dentro da função é explicitamente setado no primeiro argumento

const armador = {
    nome: "Rajon Rondo"
}

const ala2 = {
    nome: "Kobe"
}

const ala3 = {
    nome: "LeBron"
}

const ala4 = {
    nome: "Garnett"
}

const pivo = {
    nome: "Shaq"
}

const dizNome = function() {
    console.log(this.nome) // para definir um valor para esse this.nome >> globalThis.nome (node) window.nome (navegador)
}

const dizArmador = dizNome.bind(armador) // bind cria uma nova função fixando o valor de this, independente de como a função é invocada
const dizAla2 = dizNome.bind(ala2)
const dizAla3 = dizNome.bind(ala3)
const dizAla4 = dizNome.bind(ala4)
const dizPivo = dizNome.bind(pivo)

dizArmador()
dizAla2()
dizAla3()
dizAla4()
dizPivo()