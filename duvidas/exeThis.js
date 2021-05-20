console.log('----------->>>>>>>>>>><<<<<<<<<<<<<----------------')
function fora() {
    const juntar = () => {
        console.log('Dentro do JUNTAR', this)
    };

    console.log('DENTRO da FORA', this);
    juntar();
}

fora.call('VEREMOS')


console.log('----------->>>>>>>>>>><<<<<<<<<<<<<----------------')
function fora2() {
    const juntar2 = function () {
        console.log('Dentro do JUNTAR 2', this)
    };

    console.log('DENTRO da FORA 2', this);
    juntar2();
}

fora2.call('VEREMOS 2')
console.log('----------->>>>>>>>>>><<<<<<<<<<<<<----------------')