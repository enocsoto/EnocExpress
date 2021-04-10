const express = require ('express')
const app = express()

app.get('/Home', function(){
    res.send('Esta es mi primera pagina del servidor creado en Express')
})
app.get('/SegundaPagina', function(){
    res.send("Pagina secundaria");
})

app.post('/Home',function(){
    res.send("Home desde el POST");
})
app.get('/TerceraPagina', function(){
    res.send('Estamos desde la tercera pagina del servidor creado en Express')
})

app.listen(3000, function(){
    console.log("Escuchando desde el puerto 3000");
})