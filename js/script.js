function addToInput(letter) {
    const input = document.getElementById('input');
    input.value += letter;
}

function saveWord() {
    const input = document.getElementById('input');
    const word = input.value;
    // Aqui você pode fazer algo com a palavra, como enviá-la para um servidor ou exibi-la na página.
    alert('Palavra salva: ' + word);
}
