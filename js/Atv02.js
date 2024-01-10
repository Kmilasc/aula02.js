document.addEventListener('DOMContentLoaded', function () {
    var textoParaColorir = document.getElementById('texto-para-colorir');
    var colorPicker = document.getElementById('color-picker');
    
  
    colorPicker.addEventListener('input', function () {
      textoParaColorir.style.color = colorPicker.value;
    });
  });
  