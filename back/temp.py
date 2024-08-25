from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.get("/")
def index():
    object = {
        'firstName':'Ashish',
        'lastName':'Jain',
        'age':24
    }
    return jsonify(object)

if __name__ == "__main__":
    app.run(debug=True)