// Declaration

let soma = (numero1, numero2) =>{ 
        return numero1 + numero2
}

//console.log(soma(3,4))

let soma1Line = ((n1,n2) => {return n1 + n2})

//console.log(soma1Line(2,1))

let somaSemReturn = (n1,n2) => n1 + n2

//console.log(somaSemReturn(4,9))

let maisDois = numero => { return numero + 2 } //

//console.log(maisDois(3))

function soma3(){
    let um = 1

    let soma = () =>{
       return um + 3
    }
    console.log(soma())
}

soma3()
