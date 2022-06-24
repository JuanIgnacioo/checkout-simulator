from flask_cors import CORS
from Data.Checkout import checkoutdata
from flask import Flask, jsonify, request
import json

app = Flask(__name__)
CORS(app)

@app.route('/getCheckoutData', methods = ['GET'])
def listarTodo():
    try:        
        res = checkoutdata
        return jsonify (res)        
    except (Exception) as err:
        return str(err), 500

if __name__ == "__main__":
    app.run(host='backend', port='5000', debug=True)
