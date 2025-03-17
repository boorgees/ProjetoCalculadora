// Seleciona o input 
const visorCalc = document.getElementById('visorCalc')

const atualizaVisor = (value) => {
    visorCalc.value += value;
};

const limpaVisorClick = () => {
    visorCalc.value = '';
};

const calculaResultadoClick = () => {
    visorCalc.value = eval(visorCalc.value);
};

// numeros
[nmr0, nmr1, nmr2, nmr3, nmr4, nmr5, nmr6, nmr7, nmr8, nmr9].forEach((button, index) => {
    button.addEventListener('click', () => atualizaVisor(index.toString()));
});

// operadores
oprClr.addEventListener('click', limpaVisorClick);
oprMltp.addEventListener('click', () => atualizaVisor('*'));
oprMais.addEventListener('click', () => atualizaVisor('+'));
oprDvd.addEventListener('click', () => atualizaVisor('/'));
oprMenos.addEventListener('click', () => atualizaVisor('-'));
oprPar1.addEventListener('click', () => atualizaVisor('('));
oprPar2.addEventListener('click', () => atualizaVisor(')'));
oprSoma.addEventListener('click', calculaResultadoClick);

