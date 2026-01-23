from flask import Flask, request, jsonify
import sqlite3
import time

app = Flask(__name__)

# --- AI LOGIC SECTION ---
def predict_sales(last_three_months):
    # Function ke andar 4 spaces zaroori hain (Indentation fix)
    prediction = sum(last_three_months) / len(last_three_months) * 1.10 
    return round(prediction, 2)

# --- DATABASE SECTION ---
def init_db():
    conn = sqlite3.connect('logic/asif_tech_global.db') 
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS inquiries 
                      (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT)''')
    conn.commit()
    conn.close()

# --- ROUTES SECTION ---
@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "online", "message": "ASIF TECH GLOBAL API is Live"})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    conn = sqlite3.connect('logic/asif_tech_global.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)", 
                   (data['name'], data['email'], data['message']))
    conn.commit()
    conn.close()
    return jsonify({"status": "success", "message": "Asif Tech: Data Saved!"})

if __name__ == '__main__':
    init_db()
    # Terminal mein prediction test karne ke liye
    print(f"Next Month Predicted Sales: ₹{predict_sales([12000, 15000, 20000])}")
    print("Server running on http://127.0.0.1:5000")
    app.run(debug=True)