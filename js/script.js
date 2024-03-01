//var -> variável: Permite redeclaração (o que pode causar problemas no código)
//let -> variável: Não permite redeclaração
//const -> Constante: Não permite alteração do seu valor

const info = document.querySelector('.info');
const btnInfo = document.querySelector('.info button');

//Se o usuário já fechou a info, esconde a div info
if(localStorage.getItem('fechouInfo') == 'sim'){
    info.style.display='none';
}

function fecharInfo(){
    info.style.display='none';

    //Armazenando dados no STORAGE
    //SessionStorage -> Guarda dados enquanto o usuário navega na página (quando fecha a aba, os dados somem)
    //localStorage -> Guardar no computador, mantém armazenando mesmo com o fechamento do browser
    localStorage.setItem('fechouInfo', 'sim');
}

btnInfo.addEventListener('click', fecharInfo);


////////////////////////////////////////////////////calculo do IMC

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnImc = document.querySelector('#btn-imc');
const result = document.querySelector('#result');

function calcularImc(){
    
    //verificar sw os valores de peso e altura foram preenchidos
    // != comparação (diferença)
    // == comparação (igualdade)
    // && e
    // || ou

    if(peso.value != '' && altura.value != ''){
        
        let imc = peso.value / (altura.value*altura.value);

        // serve para limpar os campos apos digitar os valores
        //peso.value = '';
        //peso.value = '';

        let classificacao;// foi criado a variavel sem valor para guardar a informação 
        let cor;// foi criado a variavel sem valor para guardar info 

        //verificando a classificação
        if(imc < 18.5){
            classificacao = 'Magreza';
            cor = 'red';
        }

        // duas condições são iguais imc >= 18.5 && imc <= 24.9 ou imc <= 24.9
        else if(imc >= 18.5 && imc <= 24.9){
            classificacao = 'Normal';
            cor = '#2E943F';
        }
        
        else if(imc >= 25 && imc <= 29.9){
            classificacao = 'Sobrepeso';
            cor = '#AFB200';
        }

        else if(imc >= 30 && imc <= 34.9){
            classificacao = 'Obesidade';
            cor = '#CB7714';
        }

        else{
            classificacao = 'Obesidade extrema';
            cor = '#FF0000';
        }
        
        result.style.display='block'; //exibindo a div
        result.style.backgroundColor = cor;
        result.innerHTML = 'IMC: '+imc.toFixed(2) + '<br>Classificação: '+classificacao; //escrevendo na div, '+' é a contonagem de strim + num


    }else{

        alert('Preencha todos os campos!')
    }
}

btnImc.addEventListener('click', calcularImc);