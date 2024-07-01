function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    displayUserMessage(userInput);

    // Saludo si el usuario saluda
    if (userInput.toLowerCase().includes('hola') || userInput.toLowerCase().includes('buenos días') || userInput.toLowerCase().includes('buenas tardes') || userInput.toLowerCase().includes('buenas noches')) {
        displayBotMessage('¡Hola! ¿Cómo puedo ayudarte?');
    } else if (userInput.toLowerCase().includes('chiste')) {
        // Si el usuario menciona "chiste", contar un chiste
        tellJoke();
    } else {
        // Respuesta por defecto si no hay coincidencia
        displayBotMessage('Lo siento, no entendí. ¿Podrías repetirlo?');
    }
}

function displayUserMessage(message) {
    var chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += '<div class="user-message">' + message + '</div>';
}

function displayBotMessage(message) {
    var chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += '<div class="bot-message">' + message + '</div>';
}

function tellJoke() {
    var jokes = [
        '¿Sabes cuál es el colmo de un electricista?... ¡Tener un hijo que sea corriente!',
        '¿Por qué los pájaros no usan Facebook?... ¡Porque ya tienen Twitter!',
        '¿Cuál es el animal más antiguo?... ¡La cebra, porque está en blanco y negro!',
        // Agrega más chistes aquí
    ];

    var randomIndex = Math.floor(Math.random() * jokes.length);
    var joke = jokes[randomIndex];
    displayBotMessage(joke);
}
