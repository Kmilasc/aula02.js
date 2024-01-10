function appendValue(val) {
    document.getElementById('result').value += val;
  }
  
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  
  function deleteDigit() {
    let display = document.getElementById('result').value;
    document.getElementById('result').value = display.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      let display = document.getElementById('result').value;
      document.getElementById('result').value = eval(display);
    } catch (e) {
      document.getElementById('result').value = 'Erro';
    }
  }
  