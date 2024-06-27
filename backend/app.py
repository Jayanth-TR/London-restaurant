
from flask import Flask, request, jsonify
from bson.objectid import ObjectId
import json
from flask_cors import CORS, cross_origin
from pymongo import MongoClient

app = Flask(__name__)
cors = CORS(app)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['hotel']

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = db.users.find_one({'username': data['username'], 'password': data['password']})

    if user:
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

# Signup route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    # Check if the username already exists
    if db.users.find_one({'username': data['username']}):
        return jsonify({'message': 'User already exists'}), 400

    # Insert new user into MongoDB
    db.users.insert_one({'username': data['username'], 'password': data['password']})
    return jsonify({'message': 'Registration successful'})

# Contact form route
@app.route('/submitForm', methods=['POST'])
def submit_form():
    data = request.get_json()

    # Store contact form data in MongoDB
    db.contacts.insert_one(data)
    return jsonify({'message': 'Form submitted successfully'})

@app.route('/api/partyhall', methods=['POST', 'OPTIONS'])
@cross_origin()
def book_party_hall():
    if request.method == 'OPTIONS':
        # Handle the preflight request for CORS
        response = app.response_class(
            response=json.dumps({'message': 'CORS preflight request successful'}),
            status=200,
            mimetype='application/json'
        )
        return response
    elif request.method == 'POST':
        data = request.get_json()

        # Insert party hall booking data into MongoDB
        result = db.partyhalls.insert_one(data)

        if result.inserted_id:
            return jsonify({'message': 'Party hall booked successfully'}), 200
        else:
            return jsonify({'message': 'Failed to book party hall'}), 500


       

# Route to handle order form submission
@app.route('/api/order', methods=['POST', 'OPTIONS'])
@cross_origin()  # Enable CORS for this route
def add_order():
    if request.method == 'OPTIONS':
        # Handle the preflight request for CORS
        return jsonify({'message': 'CORS preflight request successful'}), 200
    elif request.method == 'POST':
        data = request.get_json()

        # Store menu order data in MongoDB
        result = db.orders.insert_one(data)

        if result.inserted_id:
            return jsonify({'message': 'Order added successfully'}), 200
        else:
            return jsonify({'message': 'Failed to add order'}), 500
        
@app.route('/api/orders', methods=['GET'])
def get_ordered_items():
    orders = list(db.orders.find())
    # Convert ObjectId to string
    for order in orders:
        order['_id'] = str(order['_id'])
    return jsonify(orders), 200
@app.route('/api/cancelOrder/<order_id>', methods=['POST'])
def cancel_order(order_id):
    """
    Cancel an order by its ID.
    """
    try:
        # Attempt to delete the order from the database
        result = db.orders.delete_one({"_id": ObjectId(order_id)})

        if result.deleted_count > 0:
            return jsonify({"message": "Order canceled successfully"}), 200
        else:
            return jsonify({"message": "Order not found"}), 404
    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({"message": "An error occurred during order cancellation"}), 500

if __name__ == '__main__':
    app.run(debug=True)
