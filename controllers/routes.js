const Agendamento = require('../models/Agendamento');
module.exports = app => {

    app.get('/agendamentos', (req, resp) => {
        Agendamento.listagem(resp);
    });

    app.post('/agendamentos', (req, resp) => {
        const agendamento = req.body;

        Agendamento.inserir(agendamento, resp);
    });
};