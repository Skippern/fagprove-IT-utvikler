from flask import Flask, jsonify, request
# from flask_httpauth import HTTPBasicAuth
import json
import mysql.connector
# import time
import datetime

from lib.getter import *
from lib.auth import *

try:
    with open('config.json', encoding='utf-8') as file:
        c = json.load(file)
except:
    c ={
        "nasa_api_key": "CHANGE ME",
        "db_site": "db",
        # "db_port": 33060,
        "db": "nfri",
        "db_user": "nfri",
        "db_passwd": "CHANGE ME"
    }
    with open('config.json', 'w', encoding='utf-8') as file:
        file.write(json.dumps(c, indent=4))
    print('config.json opprettet med default verdier')
    exit(3)
try:
    db = mysql.connector.connect(
        host=c['db_site'],
        user=c['db_user'],
        password=c['db_passwd'],
        database=c['db']
    )
    cursor = db.cursor(buffered=True)
except Exception as e:
    print('Database ikke koblet til')
    print(e)
    # exit(4)

global users

app = Flask(__name__)

def userList():
    u = {}
    try:
        sql = 'SELECT user,password FROM users'
        cursor.execute(sql)
        rslt = cursor.fetchall()
        for x in rslt:
            u[x[0]] = x[1]
        print(u)
        return u
    except Exception as e:
        print(e)
        print('Failed to get users')
        return {}
        # pass

users = userList()
# httpauth = HTTPBasicAuth()

@app.route('/api/v1/username')
def v1_userExist():
    r = { 'error': 'No check on existing usernames yet'}
    return jsonify(r)

@app.route('/api/v1/login')
def v1_login():
    global users
    print(users)
    login = auth(request.headers.get('Authorization'), users)
    r = { 'login': login }
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
    if not auth(request.headers.get('Authorization'), users):
        return jsonify({'Error': '401 Not Authorized'}), 401
    fromTime = request.args.get('from')
    toTime = request.args.get('to')
    datefmt = "%Y-%m-%d"
    if fromTime:
        fromTime = int(fromTime)/1000
        fromTime = datetime.datetime.utcfromtimestamp(fromTime).strftime(datefmt)
    if toTime:
        toTime = int(toTime)/1000
        toTime = datetime.datetime.utcfromtimestamp(toTime).strftime(datefmt)
    result = getAstroides(c)
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
