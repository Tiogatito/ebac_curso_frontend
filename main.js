$(document).ready(function() {
    // 1 e 2: Manipula a submissão do formulário e insere o <li> na lista
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val().trim();

        if (nomeTarefa !== '') {
            const novoItem = $('<li></li>').text(nomeTarefa);
            $('#lista-tarefas').append(novoItem);

            // Limpa o campo de texto
            $('#nome-tarefa').val('');
        }
    });

    // 3: Evento de clique para aplicar o efeito text-decoration: line-through
    // A delegação em 'li' garante o clique tanto para itens novos quanto existentes
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida');
    });
});
