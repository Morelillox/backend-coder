/* function escribirYLoguear(texto, callbackParaLoguear) {
    // simulamos que escribimos en un archivo!
    console.log(texto)
    // al finalizar, ejecutamos el callback
    callbackParaLoguear('archivo escrito con éxito')
   }
   
   escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
    const fecha = new Date().toLocaleDateString()
    console.log(`${fecha}: ${mensajeParaLoguear}`)
   }) */
   

 /*   let operacion = (valor1, valor2, funct) => funct(valor1,valor2);
   
   let suma = (val1,val2) => val1 + val2;

   let total = operacion(2,3,suma)

   console.log(total) */

   Promise.resolve(20)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.log )

