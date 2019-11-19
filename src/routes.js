const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.get('/usuariosPorIdade', UsuarioController.showByIdade);
routes.post('/usuarios', UsuarioController.store);
routes.delete('/usuarios/:id', UsuarioController.destroy);
routes.put('/usuarios/:id', UsuarioController.update);

module.exports = routes;