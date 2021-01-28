let app = require('./app'),
    puerto = process.env.PORT,
    https = require('https'),
    fs = require('fs')

    httpsOptions = {
        key: fs.readFileSync('certificado.key'),
        cert: fs.readFileSync('certificado.crt')
    }

let http = require('https').Server(httpsOptions, app)


http.listen(puerto, (err) => {
    if (err) {
        console.log(`El servidor no está funcionando`)
    } else {
        console.log(`El servicios está funcionando en el puerto ${ puerto }`)
    }
})