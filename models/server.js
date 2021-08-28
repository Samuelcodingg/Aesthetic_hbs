const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
    
        this.routes();
    }

    routes() {
        this.app.use(require('../routes/users.routes'));
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log(`App listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;
