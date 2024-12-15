import './styles.css';

const codis = [
    { code: "Tetitas" },
    { code: "Huevazos" }
];

let codeCounter = 0;

const secondBg = document.querySelector(".second");
const thirdBg = document.querySelector(".third");
const fourthBg = document.querySelector(".fourth");

document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.querySelector(".code-input");

    codeInput.addEventListener('input', () => {
        checkInputValue(codeInput.value);
    });
});

function checkInputValue(code) {
    const capitalizedCode = capitalize(code);
    const codeInput = document.querySelector(".code-input");

    if (capitalizedCode === codis[0].code) {
        codeCounter++;
        if (codeCounter === 2) {
            onComplete(4);
        } else {
            onComplete(2)
        }
        codeInput.value = "";
    } else if (capitalizedCode === codis[1].code) {
        codeCounter++;
        if (codeCounter === 2) {
            onComplete(4);
        } else {
            onComplete(3);
        }
        codeInput.value = "";
    }

    console.log(capitalizedCode+" : "+ code);
}

function onComplete(bgIndex) {

    switch (bgIndex){
        case 1 :
            secondBg.classList.remove('visible');
            thirdBg.classList.remove('visible');
            fourthBg.classList.remove('visible');
            break;
        case 2 :
            secondBg.classList.add('visible');
            break;
        case 3 :
            thirdBg.classList.add('visible');
            break;
        case 4 :
            fourthBg.classList.add('visible');
            break;
        
    }
}

function capitalize(str) {
    if (!str) return ''; // Handle empty strings
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
