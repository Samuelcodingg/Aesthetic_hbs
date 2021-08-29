const express = require('express');
const hbs = require('hbs');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
    
        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.set('view engine', 'hbs');
        hbs.registerPartials( path.join(__dirname, '../', '/views/partials'));

        this.app.use(express.static('public'));
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
