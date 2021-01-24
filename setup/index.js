let app = require('./app'),
    puerto = process.env.PORT

app.listen(puerto, (err) => {
    if (err) {
        console.log(`El servidor no está funcionando`)
    } else {
        console.log(`El servicios está funcionando en el puerto ${ puerto }`)
    }
})