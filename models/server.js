const express = require('express');
const hbs = require('hbs');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
    
        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.set('view engine', 'hbs');
        hbs.registerPartials(__dirname + '/views/partials');
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
