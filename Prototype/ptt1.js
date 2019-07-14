function Pessoa(){
    Pessoa.prototype.gritar = function(){
        console.log("AAAAAAAAAAAAAAAAAAHHHHHH")
    }

    Pessoa.prototype.correr = function(){
        console.log("correeeendo")
    }
}

const joao = new Pessoa()
const jose = new Pessoa()

joao.gritar()
jose.correr()