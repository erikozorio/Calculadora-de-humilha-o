const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'tome cuidado o vento pode leva-lo para longe';
        }else if (valorIMC < 25) {
            classificacao = 'Você está perfeito continue assim!!!';
        }else if (valorIMC < 30){
            classificacao = 'Umas caminhadas seram necessarias';
        }else if (valorIMC < 35){
            classificacao = 'Um academia 4 vezes por semana';
        }else if (valorIMC < 40){
            classificacao = 'Academia todos os dias e reduzir a quantidade de comida caloricas';
        }else {
            classificacao = 'Academia todos os dias, caminhadas e fazer dieta sei que tu consegue :)';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);