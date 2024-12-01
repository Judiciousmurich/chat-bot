from flask import Flask, request, jsonify
from flask_cors import CORS  # For enabling CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains (can be restricted to specific origins if needed)

@app.route('/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        question = data.get('question')
        chat_history = data.get('chatHistory', [])

        # Mock response based on the question
        answer = "Malaria is a disease caused by a parasite transmitted by mosquitoes."

        # Add the new Q&A to chat history
        chat_history.append({"question": question, "answer": answer})

        return jsonify({
            "answer": answer,
            "chatHistory": chat_history
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
