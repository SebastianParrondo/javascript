function cuadradoPromise(value){
    return new Promise((resolve, reject)=>{
        if(typeof value !== "number") reject(`El valor ${value} no es válido`)
        setTimeout(() => {
            resolve({
                valor: value,
                resultado: value * value
            })
        }, 0|Math.random() * 1000);
    })
}
/* ***** Manipulando asincreonia con Promise***** */
/*
cuadradoPromise(0)
.then(obj=>{
    console.log(`Inicio de Promise`)
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromise(1);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromise(2);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromise(3);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromise("z");
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    return cuadradoPromise(5);
})
.then(obj=>{
    console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
    console.log("Fin del Promise")
})
.catch(err=> console.error(err));
*/


/* ***** Manipulando asincronia con Async-Await ***** */

async function funcionAsincrinaExpresada(){
    try{
        console.log(`Comienso de la funcion Async`)

        let obj =  await cuadradoPromise(0);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(1);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(2);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        obj = await cuadradoPromise(3);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        obj = await cuadradoPromise(4);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        obj = await cuadradoPromise(5);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        console.log(`Fin de la funcion Async`)
    }catch(err){
        console.error(err)
    }
}

funcionAsincrinaExpresada();

/*const funcionAsincronaDeclarada = async() =>{
    try{
        console.log(`Comienso de la funcion Async`)

        let obj =  await cuadradoPromise(6);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(7);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(8);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        obj = await cuadradoPromise(9);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        obj = await cuadradoPromise(10);
        console.log(`Promise: ${obj.valor}, ${obj.resultado}`)

        console.log(`Fin de la funcion Async`)
    }catch(err){
        console.error(err)
    }
}

funcionAsincronaDeclarada();*/


// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, n   o-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });