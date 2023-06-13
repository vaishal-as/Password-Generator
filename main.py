from modu import *
from fastapi import FastAPI,Request,Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import mysql.connector
 

mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password = "vaishal",
        database = 'db_password'
        )

#-- creating my cursor object --#
mycursor = mydb.cursor()
check()
templates = Jinja2Templates(directory="templates")
app=FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

shared_variable = None

@app.get("/")
def Login(request:Request):
    return templates.TemplateResponse("login.html", {"request": request})

@app.post("/login")
def home(request:Request,email:str=Form(...),password:str=Form(...)):
    global shared_variable
    shared_variable=email
    value=login(email,password)
    if value=="The Username or Password is incorrect!" or value=="The Username is not found!":
        return templates.TemplateResponse("login.html", {"request": request})
    elif value=="Logged In":
        return templates.TemplateResponse("home.html", {"request": request,"UserName":shared_variable})
    

@app.post("/signup")
def signup(request:Request,Confirm:str=Form(...),email:str=Form(...),password:str=Form(...)):
    result=add_user(email,password,Confirm)

@app.get("/newsite")
def new(request:Request):
    global shared_variable
    return templates.TemplateResponse("/newsite.html",{"request":request,"UserName":shared_variable})

@app.get("/home")
def new(request:Request):
    global shared_variable
    return templates.TemplateResponse("/home.html",{"request":request,"UserName":shared_variable})

@app.post("/retrive password")
def retrive(request:Request,inputField1:str=Form(...),inputField2:str=Form(...)):
    global shared_variable
    result=retrieve(inputField1,inputField2,shared_variable)
    return templates.TemplateResponse("/home.html",{"request":request,"password":result,"UserName":shared_variable})

@app.post("/delete")
def retrive(request:Request,inputField3:str=Form(...),inputField4:str=Form(...),inputField5:str=Form(...)):
    global shared_variable
    result=remove(inputField3,inputField4,inputField5,shared_variable)
    return templates.TemplateResponse("/home.html",{"request":request,"result":result,"UserName":shared_variable})

@app.post("/add")
def add(request:Request,inputField1:str=Form(...),inputField2:str=Form(...),inputField3:int=Form(...)):
    result=generate(inputField1,inputField2,inputField3,shared_variable)
    return templates.TemplateResponse("/newsite.html",{"request":request,"message1":result,"UserName":shared_variable})

@app.post("/add-own")
def add(request:Request,inputField4:str=Form(...),inputField5:str=Form(...),inputField6:int=Form(...)):
    result=store(inputField4,inputField5,inputField6,shared_variable)
    return templates.TemplateResponse("/newsite.html",{"request":request,"message2":result,"UserName":shared_variable})

@app.post("/update")
def update(request:Request,inputField7:str=Form(...),inputField8:str=Form(...),inputField9:int=Form(...)):
    result=update_gen(inputField8,inputField7,inputField9,shared_variable)
    return templates.TemplateResponse("/newsite.html",{"request":request,"message3":result,"UserName":shared_variable})

@app.post("/update-own")
def update(request:Request,inputField10:str=Form(...),inputField11:str=Form(...),inputField12:str=Form(...)):
    result=update_own(inputField11,inputField10,inputField12,shared_variable)
    return templates.TemplateResponse("/newsite.html",{"request":request,"message4":result})