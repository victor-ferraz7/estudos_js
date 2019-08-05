function multiply(mult, ...args){
    return args.map(arg => arg * mult)
}

console.log(multiply(55,2,4,6,8,10))


/*

Rest Params(Parâmetros Rest)
-> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters

- Nos permite representar um número indefinido de argumentos como um array

*/