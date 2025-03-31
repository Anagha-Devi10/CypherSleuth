from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import re
import google.generativeai as genai
import pickle
from tensorflow.keras.preprocessing.text import Tokenizer

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow frontend requests

# 🔹 Configure Gemini AI with API Key
genai.configure(api_key="AIzaSyCCHwBqP22WtSK6n7S3EjA0csi4KYLW0Z0")

model = tf.keras.models.load_model("spam_classifier.h5")
# Dummy function to simulate ML prediction
def predict_spam(email_text):
    return 1 if "spam" in email_text.lower() else 0

# 🔹 Flask API for spam detection
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        email_text = data.get("text", "")

        if not email_text:
            return jsonify({"error": "No text provided"}), 400

        prediction = predict_spam(email_text)
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 🔹 AI-Powered CypherSleuth Chatbot
def ai_response(user_message):
    """
    Uses Gemini AI to generate responses specifically about CypherSleuth.
    """
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        prompt = f"""
        You are CypherSleuth's AI assistant, an expert in cybersecurity. 
        give answer in not more than three sentences.give short and understandable replies
        CypherSleuth is a cybersecurity platform that detects threats like:
        - Spam
        - Phishing
        - DoS (Denial of Service) attacks
        - MITM (Man-in-the-Middle) attacks
        - Compromised data leaks

        It uses:
        - LSTM-based AI models
        - NLP techniques for text analysis
        - Secure SHA-256 encryption for user protection

        Question: {user_message}
        """
        response = model.generate_content(prompt, generation_config=genai.GenerationConfig(
            max_output_tokens=100
        ))
        return response.text.strip()
    except Exception as e:
        return f"Error generating AI response: {str(e)}"

# 🔹 Chatbot API
@app.route("/chat", methods=["POST"])
def chat():
    """CypherSleuth AI chatbot endpoint"""
    try:
        data = request.get_json()
        user_message = data.get("message", "").strip()

        if not user_message:
            return jsonify({"response": "Please ask a question about CypherSleuth."})

        bot_reply = ai_response(user_message)
        return jsonify({"response": bot_reply})
    
    except Exception as e:
        return jsonify({"response": f"Error: {str(e)}"})

def analyze_threats(text_message):
    """
    Uses Gemini AI to classify threats in a given text message.
    """
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        prompt = f"""
        You are a cybersecurity AI expert. Analyze the given message and classify it into possible threats.
        
        Possible classifications:
        - Spam
        - Phishing
        - DoS (Denial of Service)
        - MITM (Man-in-the-Middle)
        - Safe (if no threats are detected)

        Message: "{text_message}"
        
        Respond with only the classifications separated by commas. Example:
        "Spam"", "Phishing","spam , phishing" OR "Safe"
        """
        
        response = model.generate_content(prompt, generation_config=genai.GenerationConfig(
            max_output_tokens=50
        ))
        
        return response.text.strip()
    except Exception as e:
        return f"Error analyzing threats: {str(e)}"

# 🔹 Flask API for threat detection
@app.route("/scan-message", methods=["POST"])
def scan_message():
    """Endpoint to analyze a text message for potential threats"""
    try:
        data = request.get_json()
        text_message = data.get("message", "").strip()

        if not text_message:
            return jsonify({"error": "No message provided"}), 400

        threat_classification = analyze_threats(text_message)
        return jsonify({"classification": threat_classification})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 🔹 Run Flask App
if __name__ == "__main__":
    app.run(debug=True)
