//IMC code

const btn = document.querySelector('.btn-calculo');
const nameInput = document.querySelector('.name');
const weightInput = document.querySelector('.weight');
const heightInput = document.querySelector('.height');
const result = document.querySelector('.result');
const userimc = document.querySelector('.user-imc');

const user = () =>{

    if(Number(weightInput.value) && Number(heightInput.value)){
        const imc = weightInput.value /(heightInput.value * heightInput.value);
        
        let calculation = '';
        let title = '';

        if(imc < 18.5){
            calculation = 'abaixo do peso';
            title = 'Abaixo do Peso 😳'
        }else if(imc < 25){
            calculation = 'com peso ideal,parabens!!!';
            title = 'Peso Ideal 🎉'
        }else if(imc <30){
            calculation = 'levemente a cima do peso';
            title = 'Acima um Pouco 🧐'
        }else if(imc <35){
            calculation = 'obsidade grau I';
            title = 'Obsidade I 😟'
        }else if(imc <40){
            calculation = 'obsidade grau II';
            title = 'Obesidade II 😕'
        }else{
            calculation = 'obesidade grau III.Cuidado!!!';
            title = 'Obesidade III 🙁'
        }

        result.textContent = `${nameInput.value} seu IMC é de ${imc.toFixed(1)}, você esta ${calculation}`;
        userimc.textContent = `${title}`;
        result.classList.add('resultblock');
 
    }else if(nameInput.value === '' || Number(nameInput.value)){
        result.classList.add('resultblock');
        result.innerHTML = 'Preencha o nome'

    }else if(isNaN(heightInput.value) || heightInput.value === ''){
        result.innerHTML = 'Altura invalida'
    }else if(isNaN(weightInput.value) || weightInput.value === ''){
        result.innerHTML = 'Peso invalido'
    }

    clearinput();
}

const clearinput = ()=>{
    nameInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
}

btn.addEventListener('click',user);