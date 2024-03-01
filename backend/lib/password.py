import string
import random

def generate_password():
    alphanum = string.ascii_letters + string.digits + '!%?#'
    parts = []
    parts.append(''.join(random.choice(alphanum) for _ in range(5)))
    parts.append(''.join(random.choice(alphanum) for _ in range(5)))
    parts.append(''.join(random.choice(alphanum) for _ in range(5)))
    parts.append(''.join(random.choice(alphanum) for _ in range(5)))

    return '-'.join(parts)

def check_password(password):
    return True
