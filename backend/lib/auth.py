from flask_httpauth import HTTPBasicAuth

def auth(db, auth):
    if username in users and check_password_hash(users.get(username), password):
        return username
    return {'error': 'Auth Implementation Error'}