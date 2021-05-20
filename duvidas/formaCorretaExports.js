exports.ola = () => {
    console.log('Olá Mundo')
}
exports.ok = () => {
    console.log('Tudo ok')
}
    //--------------------->>>>>>>>>>>><<<<<<<<<<<<-------------------
module.exports.ola = () => {
    console.log('Olá Mundo')
}

module.exports.ok = () => {
    console.log('Tudo ok')
}

    //------------------>>>>>>>>>>>>><<<<<<<<<<<<<<<-------------------

module.exports = {
    ola: () => {
        console.log('Olá Mundo')
    },
        
    ok: () => {
        console.log('Tudo ok')
    }
}

//-------------------->>>>>>>>>>>><<<<<<<<<<<<<<<<<<---------------
// Mais comum
const ola = () => {
    console.log('Olá Mundo')
},
    
const ok = () => {
    console.log('Tudo ok')
}

module.exports = {
    ola,
    ok
}

