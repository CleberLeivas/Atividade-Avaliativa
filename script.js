var nomeGlobal;
var mensagemGlobal;

function enviarMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var numeroTelefone = "5541987633223";
    var linkWhatsapp = "https://wa.me/" + numeroTelefone + "?text=" + nome + " - " + mensagem;
    window.open(linkWhatsapp, "_blank");
}

function limpar(){
    window.location.reload();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); /* Rola a página até o topo com animação suave */
}