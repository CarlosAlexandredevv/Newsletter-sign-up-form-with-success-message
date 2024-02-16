const button = document.querySelector('button');
const input = document.querySelector('input');
const span = document.querySelector('span');
const thanks = document.querySelector('.thanks');
const card = document.querySelector('.card');
const back = document.querySelector('.content button');
const user = document.querySelector('.user');

button.addEventListener('click', (event) => {
     event.preventDefault();
    if(!validarEmail(input.value)) {
        span.style.display = 'block';
        input.style.background = '#FFE8E6'
        input.style.border = '1px solid red';
    }else {
        span.style.display = 'none';
        input.style.background = 'var(--white)';
        input.style.border = 'var(--Grey) 1.5px solid';
        card.classList.add('desativado');
        thanks.classList.remove('desativado');
        user.innerText = input.value + ".";
    }});

function validarEmail(email){
    let padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email)
}


back.addEventListener('click', () => {
    card.classList.remove('desativado');
    thanks.classList.add('desativado');
});