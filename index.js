const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/Tabelas');

conexao.connect(error => {
    if(error) {
        throw error;
    };
    Tabelas.init(conexao);
    
    let app = configExpress();
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

});




