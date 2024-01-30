// chatbot.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', processUserInput);
});

function processUserInput() {
    var userInput = document.getElementById('userinput').value;
    var chatLog = document.getElementById('chatlog');

    chatLog.value += "Tú: " + userInput + "\n";

    // Procesa la entrada del usuario aquí
    var response = getResponse(userInput);
    chatLog.value += "Chatbot: " + response + "\n";

    // Limpiar la entrada del usuario
    document.getElementById('userinput').value = '';
}

function getResponse(input) {
    var doc = nlp(input);

    if (doc.has('cómo') && doc.has('(está | será) el tiempo')) {
        return "Lo siento, no puedo acceder a información en tiempo real.";
    }

    if (doc.has('hola') || doc.has('buenos días')) {
        return "¡Hola! ¿Cómo puedo ayudarte hoy?";
    }

    return "Interesante, cuéntame más.";
}
