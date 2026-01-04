const API_KEY = "AIzaSyBTakKG28BRjfkhMqbGpVAhA-3loJ2brZE";

async function sendMsg() {
const input = document.getElementById('chat-input');
const display = document.getElementById('chat-display');
const userText = input.value.trim();
if (!userText) return;

display.innerHTML += `<div style="color:#3b82f6;"><b>You:</b> ${userText}</div>`;
input.value = "";
display.innerHTML += `<div id="thinking" style="color:#eab308;">Thinking...</div>`;

try {
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({contents: [{parts: [{text: userText}]}]})
});
const data = await response.json();
const aiText = data.candidates[0].content.parts[0].text;
document.getElementById('thinking').remove();
display.innerHTML += `<div style="margin-top:10px;"><b>AI:</b> ${aiText}</div>`;
} catch (e) {
document.getElementById('thinking').innerHTML = "Error! Connection Fail.";
}
display.scrollTop = display.scrollHeight;
}

function toggleChat() {
const b = document.getElementById('chat-box');
b.style.display = b.style.display === 'none' ? 'block' : 'none';
}
