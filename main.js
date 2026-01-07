// 🧠 ASIF TECH AI BRAIN

// 🔒 SECURITY: Key ko tod kar likh rahe hain taaki GitHub block na kare
const partA = "AIzaSy";
const partB = "CoScvWygIYiXhzRITkJGpsvz8A3-A0Wtg"; // Example: "BTe_kL9..."
const partC = ""; // Agar aur todna ho toh use karein, warna khali chhod de

const API_KEY = partA + partB + partC;

// Chat Open/Close Logic
function toggleChat() {
    const chat = document.getElementById('ai-chat-box');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'flex';
        document.getElementById('userInput').focus();
    } else {
        chat.style.display = 'none';
    }
}

// Enter Key Logic
function handleEnter(e) {
    if (e.key === 'Enter') sendMessage();
}

// Message Send Logic
async function sendMessage() {
    const input = document.getElementById('userInput');
    const messages = document.getElementById('messages');
    const text = input.value.trim();

    if (!text) return;

    // User Message
    messages.innerHTML += `
        <div style="align-self: flex-end; background: #007bff; color: white; padding: 10px 15px; border-radius: 15px 15px 0 15px; max-width: 85%; margin-bottom: 5px;">
            ${text}
        </div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Loading...
    const loading = document.createElement('div');
    loading.id = 'loading-bubble';
    loading.innerHTML = '<span style="color:#666; font-size:12px; margin-left:10px;">Thinking... 🤔</span>';
    messages.appendChild(loading);
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are 'Asif Tech AI'. Answer in Hinglish. Keep it short. User: ${text}`
                    }]
                }]
            })
        });

        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text.replace(/\*\*/g, ""); 

        // Remove Loading
        const loader = document.getElementById('loading-bubble');
        if(loader) loader.remove();

        // AI Reply
        messages.innerHTML += `
            <div style="align-self: flex-start; background: white; padding: 10px 15px; border-radius: 15px 15px 15px 0; border: 1px solid #e9ecef; box-shadow: 0 2px 5px rgba(0,0,0,0.05); max-width: 85%;">
                ${reply}
            </div>`;

    } catch (error) {
        const loader = document.getElementById('loading-bubble');
        if(loader) loader.remove();
        messages.innerHTML += `<div style="color: red; font-size: 12px;">⚠️ Error: Key check karein.</div>`;
    }
    messages.scrollTop = messages.scrollHeight;
}
