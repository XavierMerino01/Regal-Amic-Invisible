import './styles.css';

const codis = [
    { code: "Tetitas", state: false },
    { code: "Huevazos", state: false }
];

let codeCounter = 0;

const secondBg = document.querySelector(".second");
const thirdBg = document.querySelector(".third");
const poster = document.querySelector(".poster");

document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.querySelector(".code-input");

    codeInput.addEventListener('input', () => {
        checkInputValue(codeInput.value);
    });

    const returnButton = document.querySelector(".button-55");

    returnButton.addEventListener('click', ()=>{
        onComplete(1);
    });
});

function checkInputValue(code) {
    const capitalizedCode = capitalize(code);
    const codeInput = document.querySelector(".code-input");

    if (capitalizedCode === codis[0].code && codis[0].state === false ) {
        codeCounter++;
        codis[0].state = true;
        if (codeCounter === 2) {
            onComplete(4);
        } else {
            onComplete(2)
        }
        codeInput.value = "";
        codeInput.blur();
    } else if (capitalizedCode === codis[1].code && codis[1].state === false) {
        codeCounter++;
        codis[1].state = true;
        if (codeCounter === 2) {
            onComplete(4);
        } else {
            onComplete(3);
        }
        codeInput.value = "";
        codeInput.blur();
    }


    console.log(capitalizedCode+" : "+ code);
}

function onComplete(bgIndex) {

    switch (bgIndex){
        case 1 :
            secondBg.classList.remove('visible');
            thirdBg.classList.remove('visible');
            break;
        case 2 :
            secondBg.classList.add('visible');
            poster.classList.add('1');
            break;
        case 3 :
            secondBg.classList.add('visible');
            poster.classList.add('2');
            break;
        case 4 :
            secondBg.classList.remove('visible');
            thirdBg.classList.add('visible');
            break;
        
    }
}

function capitalize(str) {
    if (!str) return ''; // Handle empty strings
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
