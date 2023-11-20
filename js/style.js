window.addEventListener('resize', function() {
    var larguraDaJanela = window.innerWidth;
    var minhaDiv = document.getElementById('minhaDiv');

    if (larguraDaJanela <= 800) {
        minhaDiv.style.top = '20px'; // Define a posição superior como 200px para mover a div para baixo
    } else {
        minhaDiv.style.top = '0'; // Restaura a posição superior para 0 (posição inicial)
    }
});