
class teste{
    qualquerFuncao(){
        this.testando1 = 'TESTE 1'
    }
}
const testando1 = new teste()
console.log('Verificando o this 1', this)
this.testando1 = 'Eita'
console.log('Verificando o this 2', this)
//let testando1 = 'Complicando'
console.log('Primeiro', this.testando1, 'Segundo', testando1, 'terceiro', testando1)
class teste2{
    qualquerFuncao2(){
        console.log('VEREMOS', this.testando1)
        this.testando1 = 'TESTE 2'
        console.log('Só 1 string 2 ', this.testando1)
        this.testando1 = testando1
        console.log('Vazio', this.testando1)
        console.log('VEREMOS', this.testando1)
    }
    
}

let ver = new teste2().qualquerFuncao2()
console.log('Objeto', this.ver)
console.log(ver)
console.log(this.ver)
console.log('---------->>>>>>>><<<<<<<<<<<-------------')
this.testando1 = 'Eita Functions'
function teste3(){
    console.log(this.testando1)
    this.testando1 = 'TESTE3'
    console.log(this.testando1)
    this.testando1 = testando1
    console.log(this.testando1)
    
}
teste3()