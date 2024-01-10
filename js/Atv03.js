document.addEventListener('DOMContentLoaded', function () {
    var counterDisplay = document.getElementById('counter-display');
    var addButton = document.getElementById('add-btn');
    var resetButton = document.getElementById('reset-btn');
  
    addButton.addEventListener('click', function () {
      counterDisplay.value = parseInt(counterDisplay.value) + 1;
    });
  
    resetButton.addEventListener('click', function () {
      counterDisplay.value = 0;
    });
  });
  