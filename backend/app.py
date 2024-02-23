from flask import Flask, jsonify, request

app = Flask(__name__)

# @app.route('/')
# def hello():
#     return 'Hello, World!'

@app.route('/api/v1/login')
def v1_login():
    r = {}
    return jsonify(r)

@app.route('/api/v1/user/reset')
def v1_userReset():
    r = {}
    return jsonify(r)

@app.route('/api/v1/user/create')
def v_userCreate():
    r = {}
    return jsonify(r)

@app.route('/api/v1/search')
def v1_search():
    fromTime = request.args.get('from')
    toTime = request.args.get('to')
    result = []
    r = {
        'from': fromTime,
        'to': toTime,
        'result': result,
        'metadata': {
            'units': {
                'name': 'text',
                'diameter': 'meters',
                'velocity': 'km/s',
                'closeApproachTimestamp': 'unix timestamp',
                'closestDistance': 'megameters',
            }
        }
    }
    return jsonify(r)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
