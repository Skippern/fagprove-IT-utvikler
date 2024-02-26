from flask_httpauth import HTTPBasicAuth
import base64

def auth(header = None, users = None):
    if header:
        auth_type, token = header.split()
        if auth_type.lower() == 'basic':
            try:
                username_password = base64.b64decode(token.encode('utf-8'))
            except Exception as e:
                raise e
                username_password = token
            # return username_password
            username, password = username_password.split(':'.encode('utf-8'))
            if not (username and password):
                return False
            return users.get(username.decode('utf-8')) == password.decode('utf-8')
            return { 'status': users.get(username.decode('utf-8')) == password.decode('utf-8'), 
                    'user': username.decode('utf-8'), 
                    'passwd': password.decode('utf-8'), 
                    'password': users.get(username.decode('utf-8')),
                    'debug': users}
    return False