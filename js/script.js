function addToInput(letter) {
    const input = document.getElementById('input');
    input.value += letter;
}

function saveWord() {
    const input = document.getElementById('input');
    const word = input.value;
   
    alert('Palavra salva: ' + word);
}
