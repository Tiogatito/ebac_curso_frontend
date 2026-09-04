const form = document.getElementById('formulario-comparador');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagem = document.getElementById('mensagem-resposta');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = `Válido! O número B (${valorB}) é maior que o número A (${valorA}).`;
        mensagem.className = 'mensagem sucesso';
    } else {
        mensagem.textContent = `Inválido! O número B (${valorB}) precisa ser estritamente maior que o número A (${valorA}).`;
        mensagem.className = 'mensagem erro';
    }
});
