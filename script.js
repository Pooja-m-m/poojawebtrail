window.onload = function() {
    console.log("Website Loaded");

    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotMessages = document.getElementById("chatbot-messages");

    const responses = {
        "hello": "Hello! How can I assist you?",
        "call":"080-xxxxxxxxxx",
        "contact": "You can reach us via email at contact@einfratech.com.",
        "portfolio": "You can check our portfolio in the Portfolio section.",
        "help": "I am here to assist you. Ask me anything!"
    };

    chatbotToggle.addEventListener("click", () => {
        chatbotWindow.classList.toggle("hidden");
    });

    chatbotSend.addEventListener("click", () => {
        const userMessage = chatbotInput.value.toLowerCase().trim();
        if (userMessage === "") return;

        const userDiv = document.createElement("div");
        userDiv.textContent = "User: " + userMessage;
        chatbotMessages.appendChild(userDiv);

        let botResponse = responses[userMessage] || "I'm sorry, I didn't understand that. Please try asking something else.";
        
        const botDiv = document.createElement("div");
        botDiv.textContent = "Bot: " + botResponse;
        chatbotMessages.appendChild(botDiv);

        chatbotInput.value = "";
    });
};
