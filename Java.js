// Obtén elementos del DOM
const chatbot = document.getElementById('chatbot');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Función para mostrar un mensaje del chatbot
function mostrarMensajeDelChatbot(mensaje) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.classList.add('mensaje-chatbot');
    mensajeDiv.textContent = mensaje;
    chatbot.appendChild(mensajeDiv);
}

// Función para responder automáticamente
function responderAutomaticamente() {
    const mensajeUsuario = userInput.value;
    mostrarMensajeDelChatbot('Has dicho: ' + mensajeUsuario);
    userInput.value = '';
}

// Manejar clic en el botón de enviar
sendButton.addEventListener('click', () => {
    responderAutomaticamente();
});

// Manejar presionar Enter en el cuadro de entrada
userInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        responderAutomaticamente();
    }
});
