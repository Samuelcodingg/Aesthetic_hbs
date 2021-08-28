const { response, request } = require('express');

const initApp = (req = request, res = response) => {
    res.render('home');
}

module.exports = {
    initApp
}