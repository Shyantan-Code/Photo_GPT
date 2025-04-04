function processImage() {
    let upload = document.getElementById("upload").files[0];
    if (!upload) {
        alert("Please upload an image first!");
        return;
    }

    let chatBox = document.getElementById("chatBox");

    // User message
    let userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user");
    userMessage.textContent = "Generating your Ghibli Portrait...";
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate AI Processing
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("chat-message", "bot");
        botMessage.innerHTML = `<img src="https://via.placeholder.com/300" alt="Ghibli Portrait"> <br> Here is your Ghibli-style portrait! 🎨`;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 3000);
}
