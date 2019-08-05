let defer = new Promise((resolve, reject) => {
   setTimeout(() =>{
        if (true){
            resolve('Isso Funciona')
        }
        else{
            reject('Error')
        }
   },3000)
});

defer.then((data) => console.log(data))
     .then(() =>{ console.log("Resolvendo junto")})
     .then(() =>{ console.log('Mais uma vez')})
     .catch((err) => console.log(err));

/*
Promises : É um objeto usado para processamento assíncrono. 
- Uma promise representa um valor que pode estar disponível agora, no futuro  ou nunca.

-> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/