//creacion de modulos
const express = require('express')
//se crea instancia para usarla
const app= express()

//los callback pueden recibir tres parametros= req(recibe parametros de la URL) y res(funcion que permite dar respuesta)
app.get('/',(request, response)=>{
    response.send("Hello world, i'm Miryam")
})

/**
 * FUNCIONALIDAD 
 * 
 */
//se coloca un callback aunque no es necesario 
//http;//localhost:3000
app.listen(3000,() => {
    console.log('Listening on port 3000')
})