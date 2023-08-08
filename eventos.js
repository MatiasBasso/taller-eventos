document.addEventListener('DOMContentLoaded', function() {
    let divElement = document.getElementById('myDiv');
    let btnSaludar = document.getElementById('saludarBtn');

    divElement.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });

    btnSaludar.addEventListener('click', function(event){
        event.stopPropagation();

    });
});

