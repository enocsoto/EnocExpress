const express = require ('express')
const app = express()

app.get('/Home', function(){
res.send('Esta es mi primera pagina del servidor creado en Express')
})

app.listen(3000, function(){
    console.log("Escuchando desde el puerto 3000");
})