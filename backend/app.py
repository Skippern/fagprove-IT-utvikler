from flask import Flask, jsonify, request
import json
import mysql.connector

app = Flask(__name__)

try:
    with open('config.json', encoding='utf-8') as file:
        c = json.load(file)
except:
    c ={
        "nasa_api_key": "CHANGE ME",
        "db_site": "db",
        "db_port": 3306,
        "db": "nfri",
        "db_user": "nfri",
        "db_passwd": "CHANGE ME"
    }
    with open('config.json', 'w', encoding='utf-8') as file:
        file.write(json.dumps(c, indent=4))
    exit(3)
try:
    db = mysql.connector.connect(
        host=c['db_site'],
        user=c['db_user'],
        password=c['db_passwd'],
        database=c['db']
    )
    cursor = db.cursor(buffered=True)
except:
    exit(4)

@app.route('/api/v1/login')
def v1_login():
    r = { 'error': 'Login Not Ready' }
    return jsonify(r)

@app.route('/api/v1/user/reset')
def v1_userReset():
    r = { 'error': 'Reset User Not Ready' }
    return jsonify(r)

@app.route('/api/v1/user/create')
def v_userCreate():
    r = { 'error': 'Create User Not Ready' }
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
