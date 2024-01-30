document.getElementById('send').addEventListener('click', function() {
    var userInput = document.getElementById('userinput').value;
    displayMessage(userInput, 'user');

    // Generar una respuesta basada en el análisis simple de la entrada
    var response = generateResponse(userInput);
    displayMessage(response, 'bot');

    document.getElementById('userinput').value = ''; // Limpiar la entrada
});

function displayMessage(message, sender) {
    var messagesContainer = document.getElementById('messages');
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar al último mensaje
}

function generateResponse(input) {
    input = input.toLowerCase();
    if (input.includes("cómo estás")) {
        return "Estoy bien, gracias por preguntar. ¿Y tú?";
    } else if (input.includes("hola") || input.includes("buenos días")) {
        return "¡Hola! ¿En qué puedo ayudarte hoy?";
    } else if (input.includes("nombre")) {
        return "Soy tu asistente virtual. ¿Cómo puedo asistirte?";
    } else {
        return "Lo siento, aún estoy aprendiendo y no sé cómo responder a eso.";
    }
}
