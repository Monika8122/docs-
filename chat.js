function sendMessage() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();

    if (messageText === '') {
        return;
    }

    const chatBox = document.getElementById('chat-box');
    const userMessage = document.createElement('div');
    userMessage.textContent = messageText;
    userMessage.classList.add('chat-message', 'sent');

    chatBox.appendChild(userMessage);

    // Simulate response from chatbot after a delay
    setTimeout(() => {
        const chatbotResponse = document.createElement('div');
        chatbotResponse.textContent = 'Hey there! How can i help you !';
        chatbotResponse.classList.add('chat-message', 'received');

        chatBox.appendChild(chatbotResponse);

        // Scroll to bottom of chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    userInput.value = ''; // Clear user input after sending message
}