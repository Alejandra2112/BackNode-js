const express = require('express');
const cors  = require('cors');//Implementar seguridad
const bodyParser = require('body-parser')//Recibir datos de formularios html
const db_connection = require('../Database/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.port

        this.HurtoPath = '/api/hurto'
        
        this.middlewares()//Seguridad

        this.routes()

        this.db_connect()

    }
    middlewares() //Directorio Publico
    {
        this.app.use( cors() );
        this.app.use(bodyParser.json()) 
    }

    routes()
    {
        this.app.use(this.HurtoPath, require ('../Routes/hurto'))
    }

    async db_connect(){
        await db_connection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = Server