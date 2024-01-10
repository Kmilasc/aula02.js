function changeFilter(filter) {
    document.getElementById('original').style.display = 'none';
    document.getElementById('hot').style.display = 'none';
    document.getElementById('pb').style.display = 'none';
  

    document.getElementById(filter).style.display = 'block';
  }
  