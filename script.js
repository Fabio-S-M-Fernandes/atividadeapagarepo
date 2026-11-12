const caixas = document.querySelectorAll('.caixa');
const botaoPrincipal = document.querySelector('#btn-principal');
const botaoSecundario = document.querySelector('#btn-secundario');

// Cada caixa, ao ser clicada, fica com a borda verde[cite: 1]
caixas.forEach(caixa => {
    caixa.addEventListener('click', function() {
        caixa.style.border = '3px solid green';
    });
});

// Ao clicar no botão secundário, todas as caixas perdem a borda[cite: 1]
botaoSecundario.addEventListener('click', function() {
    caixas.forEach(caixa => {
        caixa.style.border = 'none';
    });
});

// Ao clicar no botão principal, todas as caixas ficam com a borda azul[cite: 1]
botaoPrincipal.addEventListener('click', function() {
    caixas.forEach(caixa => {
        caixa.style.border = '3px solid blue';
    });
});