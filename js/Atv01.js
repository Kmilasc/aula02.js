document.addEventListener('DOMContentLoaded', function () {
    var textoParaTrocar = document.getElementById('texto-a-ser-trocado');
    var textoOriginal = textoParaTrocar.innerText;
    
    document.getElementById('botao-trocar-texto').addEventListener('click', function () {
      textoParaTrocar.innerText = 'Texto foi alterado com sucesso!';
    });
  
    document.getElementById('botao-recarregar-pagina').addEventListener('click', function () {
      window.location.reload();
    });
  });
  