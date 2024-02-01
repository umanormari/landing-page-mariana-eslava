// Adicione esta função no seu script.js
function mostrarTexto(id) {
    var textoExperiencia = document.getElementById("textoExperiencia_" + id);
    
    // Verifica se o elemento está visível
    var estaVisivel = getComputedStyle(textoExperiencia).display !== "none";

    // Alterna entre exibição e ocultação
    textoExperiencia.style.display = estaVisivel ? "none" : "block";
}

// Execute esta função ao carregar a página para garantir que o conteúdo esteja inicialmente oculto
document.addEventListener("DOMContentLoaded", function() {
    var botoesExperiencia = document.querySelectorAll('[id^="textoExperiencia_b"]');
    
    botoesExperiencia.forEach(function(botao) {
        botao.style.display = "none";
    });
});
