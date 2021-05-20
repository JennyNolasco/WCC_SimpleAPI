exports.ola = () => {
    console.log('Olá')
}
module.exports.noModule = () => {
    console.log('module', module)
}
module.exports.noExports = () => {
    console.log('exports', exports)
}

exports = 'Mostrando o que acontecom o Igual no Exports'
module.exports = 'Mostrando o que acontecom o Igual no Module Exports'

console.log(module);