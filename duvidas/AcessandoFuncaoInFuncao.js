function myFunction(){
    function funcao1(){
        console.log('FUNÇÃO 1')
    }

    function funcao2(){
        console.log('FUNÇÃO 2')
    }

    return {
         funcao1: funcao1,
         funcao2: funcao2
    }
}


teste = myFunction()
teste.funcao2()