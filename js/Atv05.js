function calculate() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var operation = document.getElementById('operation').value;
    var result;
  
    switch (operation) {
      case 'add':
        result = value1 + value2;
        break;
      case 'subtract':
        result = value1 - value2;
        break;
      case 'multiply':
        result = value1 * value2;
        break;
      case 'divide':
        if (value2 !== 0) {
          result = value1 / value2;
        } else {
          result = "Não é possível dividir por zero";
        }
        break;
      default:
        result = "Operação inválida";
        break;
    }
  
    document.getElementById('result').value = result;
  }
  