/* ================================================
   CONTROLE DOS ALERTS DE SUCESSO E ERRO

   O Bootstrap usa a classe "show" para exibir alerts.
   Ao mostrar um, escondemos o outro para não acumularem.
   ================================================ */

/* Exibe o alert de sucesso e esconde o de erro */
function mostrarSucesso() {
    document.getElementById('errorAlert').classList.remove('show');
    document.getElementById('successAlert').classList.add('show');
}

/* Exibe o alert de erro e esconde o de sucesso */
function mostrarErro() {
    document.getElementById('successAlert').classList.remove('show');
    document.getElementById('errorAlert').classList.add('show');
}

/* Fecha qualquer alert pelo ID recebido como parâmetro */
function fecharAlert(id) {
    document.getElementById(id).classList.remove('show');
}


/* ================================================
   CONTROLE DO TOAST (NOTIFICAÇÃO)

   O Bootstrap fornece a classe Toast que gerencia
   a exibição e ocultação da notificação flutuante.
   Criamos uma instância do Toast e chamamos .show()
   para exibi-la ao clicar no botão.
   ================================================ */

/* Inicializa o componente Toast do Bootstrap
   referenciando o elemento pelo ID */
var toastElemento = document.getElementById('liveToast');
var toast = new bootstrap.Toast(toastElemento);

/* Exibe o toast ao chamar a função */
function mostrarToast() {
    toast.show();
}


/* ================================================
   CONTROLE DA BARRA DE PROGRESSO

   A barra tem seu "width" atualizado via style inline.
   O texto dentro da barra mostra o percentual atual.
   Math.min e Math.max garantem que o valor fique
   sempre entre 0% e 100%.
   ================================================ */

/* Atualiza o progresso somando ou subtraindo o valor recebido */
function updateProgress(change) {
    var bar = document.getElementById('dynamicProgress');

    /* Pega o valor atual do width (ex: "40%" → 40) */
    var current = parseInt(bar.style.width) || 0;

    /* Garante que o novo valor fique entre 0 e 100 */
    var next = Math.min(Math.max(current + change, 0), 100);

    /* Aplica o novo width e atualiza o texto da barra */
    bar.style.width = next + '%';
    bar.textContent = next + '%';
}


/* ================================================
   TOGGLE DA ANIMAÇÃO SHIMMER

   Controla se a animação está ligada ou desligada.
   A variável "animando" guarda o estado atual.

   Quando ligado:
     - Adiciona a classe "barra-shimmer" na barra
     - Muda o botão para "Desligar Animação" (vermelho)

   Quando desligado:
     - Remove a classe "barra-shimmer" da barra
     - Volta o botão para "Ligar Animação" (verde)
   ================================================ */

/* Estado inicial: animação desligada */
var animando = false;

function toggleAnimacao() {
    var bar = document.getElementById('dynamicProgress');
    var btn = document.getElementById('toggleAnimationBtn');

    if (animando) {
        /* ---- DESLIGA a animação ---- */
        bar.classList.remove('barra-shimmer');
        btn.textContent = 'Ligar Animação';
        btn.classList.replace('btn-danger', 'btn-success');
        animando = false;

    } else {
        /* ---- LIGA a animação ---- */
        bar.classList.add('barra-shimmer');
        btn.textContent = 'Desligar Animação';
        btn.classList.replace('btn-success', 'btn-danger');
        animando = true;
    }
}
