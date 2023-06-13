
#-- import statements --#
import mysql.connector
import string
import random
from base64 import b64decode,b64encode
from getpass import getpass

#-- initilize some essential variables --#

fin = True
ans = 1
#-- initilize mysql with python --#

mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password = "vaishal",
        database = 'db_password'
        )

#-- creating my cursor object --#
mycursor = mydb.cursor()

#-- Userdefined functions --#

# -----> checks the database and table is present in the database 
def check():
    mycursor.execute('''CREATE DATABASE IF NOT EXISTS db_password''')
    mycursor.execute('''CREATE TABLE IF NOT EXISTS users(username varchar(225) NOT NULL UNIQUE,password varchar(225) NOT NULL)''')
    mycursor.execute('''use db_password''')
    mydb.commit()

# ------> Random password generator 
def random_password_generator(size):
    chars = string.ascii_letters + string.punctuation + string.digits
    return ''.join(random.choice(chars) for i in range(0,size))

# -------> Add user functions
def add_user(username,password,confirm):
    try:
        if password == confirm:
            password = password.encode()
            password = b64encode(password)
            password = password.decode()
            mycursor.execute("insert into users values('%s','%s')" %(username,password))
            mycursor.execute("CREATE TABLE %s(platform varchar(500) NOT NULL,username varchar(225) NOT NULL,password varchar(225) NOT NULL)" %username)
            mydb.commit()
            return 'Signed up successfully'
        else:
            return "Password entered is not matching!"
    except:
        return "The username already exists!"


# ----------> Login function
def login(username,password):
    try:
        mycursor.execute("SELECT PASSWORD FROM users WHERE username='%s'" %username)
        confirm = mycursor.fetchone()
        confirm = b64decode(confirm[0])
        confirm = confirm.decode()
        if password == confirm:
            return "Logged In"
        else:
            return "The Username or Password is incorrect!"
    except:
        return "The Username is not found!"

# --------------> Store Password function to store password
def store(platform,username,password,user):
    password = b64encode(password)
    password = password.decode()
    mycursor.execute("INSERT INTO %s values('%s','%s','%s')" %(user,platform,username,password))
    mydb.commit()
    return "Password Enterd!"


def generate(platform,username,size,user):
    password = random_password_generator(size).encode()
    password = b64encode(password)
    password = password.decode()
    mycursor.execute("INSERT INTO %s values('%s','%s','%s')" %(user,platform,username,password))
    mydb.commit()
    return "Password Enterd!"

# --------------> Retrieve Password function to retrieve password
def retrieve(platform,username,user):
    try:
        mycursor.execute("SELECT password FROM %s WHERE platform='%s' AND username='%s'" %(user,platform,username))
        password = mycursor.fetchone()
        password = b64decode(password[0]).decode()
        return "Password: %s" %password
    except:
        return "Platform or Username is incorrect"
        

# ---------------> Update Password function

def update_gen(username,platform,size,user):
    try:
        mycursor.execute("SELECT * FROM %s WHERE platform='%s'AND username='%s'" %(user,platform,username))
        confirm = mycursor.fetchone()
        if username == str(confirm[1]) and platform == str(confirm[0]):
            password = random_password_generator(size)
            password = password.encode()
            password = b64encode(password)
            password = password.decode()
            try:
                mycursor.execute('''UPDATE %s SET password="%s" WHERE username="%s" AND platform="%s" ''' %(user,password,username,platform))
                mydb.commit()
                return "The Password Updated!"
            except TypeError:
                return "Username or Platform is incorrect"
    except TypeError:
        return "Username or Platform is incorrect!"

def update_own(username,platform,password,user):
    try:
        mycursor.execute("SELECT * FROM %s WHERE platform='%s'AND username='%s'" %(user,platform,username))
        confirm = mycursor.fetchone()
        if username == str(confirm[1]) and platform == str(confirm[0]):
            password = password.encode()
            password = b64encode(password)
            password = password.decode()
            try:
                mycursor.execute('''UPDATE %s SET password="%s" WHERE username="%s" AND platform="%s" ''' %(user,password,username,platform))
                mydb.commit()
                return "The Password Updated!"
            except TypeError:
                return "Username or Platform is incorrect"
    except TypeError:
        return "Username or Platform is incorrect!"
   

# ------------> Remove password function
def remove(platform,username,password,user):
    mycursor.execute("SELECT * FROM users WHERE username='%s'" %user)
    confirm = mycursor.fetchone()
    confirm = b64decode(confirm[1])
    confirm = confirm.decode()
    if password == confirm:
        try:
            mycursor.execute("DELETE FROM %s WHERE username='%s' and platform='%s'" %(user,username,platform))
            mydb.commit()
            return "Password removed!"
        except:
            return "Username or platform is NOTFOUND!"
    else:
        return "Password is incorrect!"
