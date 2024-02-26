from flask import Flask, jsonify, request
# from flask_httpauth import HTTPBasicAuth
import json
import mysql.connector
# import time
import datetime

from lib.getter import *
from lib.auth import *
from lib.password import *

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

@app.route('/api/v1/username')
def v1_userExist():
    users = userList()
    test = request.args.get('user')
    r = { 'available': True }
    if test in users:
        r = { 'available': False}
    return jsonify(r)

@app.route('/api/v1/login')
def v1_login():
    users = userList()
    print(users)
    login = auth(request.headers.get('Authorization'), users)
    r = { 'login': login }
    code = 401
    if login:
        code = 200
    return jsonify(r), code

@app.route('/api/v1/user/reset')
def v1_userReset():
    r = { 'error': 'Reset User Not Ready' }
    return jsonify(r)

@app.route('/api/v1/user/create')
def v_userCreate():
    users = userList()
    r = { 'error': 'Create User Not Ready' }
    username = request.args.get('user')
    passwd = request.args.get('password')
    mail = request.args.get('email')
    tel = request.args.get('phone')
    newsletter = int(request.args.get('newsletter'))
    if newsletter == None:
        newsletter = False
    newsletter = int(newsletter)
    newsletter = bool(newsletter)
    newsletter = int(newsletter)
    if username == None or passwd == None or mail == None:
        r = {
            'error': 'Missing mandatory fields'
        }
        return jsonify(r), 400
    if username in users:
        r = {
            'error': 'Username already exists'
        }
        return jsonify(r), 400
    if not check_password(passwd):
        r = {
            'error': 'Illegal password'
        }
        return jsonify(r), 406
    if tel:
        arr = 'user, password, email, phone, newsletter'
        val = "'%s', '%s', '%s', '%s', '%s'" % (username, passwd, mail, tel, newsletter)
    else:
        arr = 'user, password, email, newsletter'
        val = "'%s', '%s', '%s', '%s'" % (username, passwd, mail, newsletter)
    sql = 'INSERT INTO `users` (%s) VALUES(%s)' % (arr, val)
    cursor.execute(sql)
    db.commit()
    r = { 'result': 'congratulation, %s' % username }
    return jsonify(r), 201

@app.route('/api/v1/search')
def v1_search():
    users = userList()
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
