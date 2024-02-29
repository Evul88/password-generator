import './style.scss'
import generator from 'generate-password-browser';

let copyButton = document.getElementById('copyIcon');
copyButton.addEventListener('click', (e) => {
    let password = document.getElementById('password-string').textContent;
    if(password){
        navigator.clipboard.writeText(password);
        let copyText = document.getElementById('copyText');
        copyText.style.display = 'flex';
        copyText.style.opacity = '1';
        
        setTimeout(() => {
            copyText.style.opacity = '0';
            setTimeout(() => {
                copyText.style.display = 'none';
            }, 1000);
        }, 2000);
    } else {
        alert('No hay nada que copiar.')
    }
});

let slider = document.getElementById('length');
let sliderNumber = document.getElementById('lengthValue');

slider.addEventListener('input', () => {
    let progress = document.getElementById('progressBar');
    sliderNumber.textContent = slider.value;
    progress.style.width = (slider.value / slider.max * 100 - 0.755) + "%";
    showStrength();
});

let checkboxes = document.getElementsByClassName('checkbox');
let lower, upper, numbers, symbols = false;
Array.from(checkboxes).forEach(checkbox => {
    checkbox.addEventListener('click', (e)=>{
        if(checkbox.id == 'upperCheck'){
            upper = !upper;
        }
        if(checkbox.id == 'lowerCheck'){
            lower = !lower;
        }
        if(checkbox.id == 'numbersCheck'){
            numbers = !numbers;
        }
        if(checkbox.id == 'symbolsCheck'){
            symbols = !symbols;
        }
        showStrength();
    });
});

function showStrength(){
    let noPasswd = document.querySelector('.noPasswd');
    let veryWeakPasswd = document.querySelector('.veryWeakPasswd');
    let weakPasswd = document.querySelector('.weakPasswd');
    let mediumPasswd = document.querySelector('.mediumPasswd');
    let strongPasswd = document.querySelector('.strongPasswd');
    if (slider.value == 0) {
        noPasswd.style.display = 'flex'
        veryWeakPasswd.style.display = 'none';
        weakPasswd.style.display = 'none';
        mediumPasswd.style.display = 'none';
        strongPasswd.style.display = 'none';
    }
    
    if (slider.value > 0 || slider.value > 0 && !upper && !lower && !numbers && !symbols) {
        noPasswd.style.display = 'none'
        veryWeakPasswd.style.display = 'flex';
        weakPasswd.style.display = 'none';
        mediumPasswd.style.display = 'none';
        strongPasswd.style.display = 'none';
    }
    if (slider.value > 5) {
        noPasswd.style.display = 'none'
        veryWeakPasswd.style.display = 'none';
        weakPasswd.style.display = 'flex';
        mediumPasswd.style.display = 'none';
        strongPasswd.style.display = 'none';
    }
    if (slider.value > 9 && upper && lower || slider.value > 9 && numbers && symbols ) {
        noPasswd.style.display = 'none'
        veryWeakPasswd.style.display = 'none';
        weakPasswd.style.display = 'none';
        mediumPasswd.style.display = 'flex';
        strongPasswd.style.display = 'none';
    }
    if (slider.value > 15 && upper && lower && numbers && symbols || slider.value > 8 && upper && lower && numbers && symbols) {
        noPasswd.style.display = 'none'
        veryWeakPasswd.style.display = 'none';
        weakPasswd.style.display = 'none';
        mediumPasswd.style.display = 'none';
        strongPasswd.style.display = 'flex';
    }
}

let generateButton = document.getElementById('submit');
generateButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(slider.value != 0){
        let password = generator.generate({
            length: slider.value,
            uppercase: upper,
            lowercase: lower,
            numbers: numbers,
            symbols: symbols,
        })
        document.getElementById('password-string').textContent = password;

        let copyText = document.getElementById('copyText');
        copyText.style.display = 'none';

        slider.value = 0;
        let progress = document.getElementById('progressBar');
        progress.style.width = 0;
        sliderNumber.textContent = '0';


        let checkboxes = document.getElementsByClassName('checkbox');
        lower = upper = numbers = symbols = false;
        Array.from(checkboxes).forEach(checkbox => {
            checkbox.checked = false;
        });
        showStrength();
    } else if(!upper && !lower && !numbers && !symbols) {
        alert('Al menos uno de los campos debe ser marcado.');
    } else {
        alert('La contraseña no puede tener 0 caracteres de longitud.');
    }
});