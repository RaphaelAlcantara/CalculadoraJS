function calculadora(){
    const operacao = Number(prompt("Escolha a operação: \n" +
        "1 - Adição\n" +
        "2 - Subtração\n" +
        "3 - Multiplicação\n" +
        "4 - Divisão\n"+
        "5 - Potenciação"))

    let valor1 = Number(prompt("Insira o primeiro valor"))
    let valor2 =  Number(prompt("Insira o segundo valor"))
    let resultado;


    function soma(){
        resultado =valor1+valor2
        alert(`${valor1} + ${valor2} = ${resultado}`)
    }
    function subtracao(){
        resultado =valor1-valor2
        alert(`${valor1} - ${valor2} = ${resultado}`)
    }
    function multiplicacao(){
        resultado =valor1*valor2
        alert(`${valor1} * ${valor2} = ${resultado}`)
    }
    function divisao(){
        resultado =valor1/valor2
        alert(`${valor1} / ${valor2} = ${resultado}`)
    }
    function potencia(){
        resultado =valor1**valor2
        alert(`${valor1} elevado à ${valor2} = ${resultado}`)
    }

    function novaOperacao(){
        let opcao = Number(prompt("Deseja fazer outra operação:\n" +
            "1 - SIM\n" +
            "2 - NÃO"))
        if(opcao == 1){
            calculadora()
        }else if(opcao== 2){
            alert("Até mais!")
        }else{
            novaOperacao()
        }
    }

    if (operacao == 1){
        soma();
    }else if(operacao==2){
        subtracao()
    }else if(operacao==3){
        multiplicacao()
    }else if(operacao==4){
        divisao()}
    else if(operacao==5){
        potencia()
    }else{
        console.log("Operação inválida")
    }
    novaOperacao()
}

calculadora()

