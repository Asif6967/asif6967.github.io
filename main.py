from js import document

def check_password(e):
    password = document.getElementById("passInput").value
    output = document.getElementById("resultOutput")
    
    score = 0
    
    if len(password) > 0:
        # Check 1: Length
        if len(password) >= 8:
            score += 1
        # Check 2: Uppercase
        if any(c.isupper() for c in password):
            score += 1
        # Check 3: Digits
        if any(c.isdigit() for c in password):
            score += 1
        # Check 4: Special Symbols
        if any(c in "!@#$%^&*()_+" for c in password):
            score += 1
        
        # FINAL RESULT LOGIC
        if score == 0:
            output.innerHTML = "TOO SHORT"
            output.style.color = "gray"
        elif score <= 2:
            output.innerHTML = "⚠️ WEAK PASSWORD"
            output.style.color = "#ef4444"
        elif score == 3:
            output.innerHTML = "⚠️ MODERATE"
            output.style.color = "#f59e0b"
        else:
            output.innerHTML = "✅ SECURE & STRONG"
            output.style.color = "#22c55e"
    else:
        output.innerHTML = "WAITING FOR INPUT..."
        output.style.color = "#555"
