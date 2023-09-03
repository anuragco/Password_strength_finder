const inputBox = document.getElementById('input');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const strength = document.getElementById('strength');

inputBox.addEventListener('input', () => {
    if(inputBox.value.length > 0) {
        result.style.display = 'block';
    }
    else {
        result.style.display = 'none';

    }
    if(inputBox.value.length < 4){
        strength.innerHTML = 'Weak'
        strength.style.color = 'red'
        inputBox.style.borderColor = 'red';

    }

    else if(inputBox.value.length >= 4 && inputBox.value.length <8){
        strength.innerHTML = 'Medium'
        strength.style.color = 'orange';
        inputBox.style.borderColor = 'orange';


    }

    else if(inputBox.value.length >=8){
        strength.innerHTML = 'Strong'
        strength.style.color = 'green'
        inputBox.style.borderColor = 'green';


    }
    
})

