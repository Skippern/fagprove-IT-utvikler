from flask import Flask, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
import json
import mysql.connector
# from mysql.connector import plugins

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

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://%s:%s@%s/%s' % (c['db_user'],c['db_passwd'],c['db_site'],c['db'])
# try:
#     dbA = SQLAlchemy(app)
# except Exception as e:
#     print('SQLAlchemy failed')
#     print(e)
#     pass

def userList():
    try:
        sql = 'SELECT user,password FROM users'
        cursor.execute(sql)
        users = cursor.fetchall()
        print(users)
    except Exception as e:
        print(e)
        print('Failed to get users')
        pass

userList()
httpauth = HTTPBasicAuth()


@app.route('/api/v1/username')
def v1_userExist():
    r = { 'error': 'No check on existing usernames yet'}
    return jsonify(r)

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
    login = auth(db, httpauth)
    fromTime = request.args.get('from')
    toTime = request.args.get('to')
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
