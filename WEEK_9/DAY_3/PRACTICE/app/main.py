from fastapi import FastAPI, Query, Path, Response, status, HTTPException, Depends             
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from .models import models
from .database.connection import engine, get_db
from sqlalchemy.orm import Session
from .schemas import Create_post, Post_response, Post_base, User_base, Create_user_response
from typing import List
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=['bcrypt'], deprecated="auto")


models.Base.metadata.create_all(bind=engine)


while 1:
    try:
        conn = psycopg2.connect(
            host="localhost",
            database="fast-api",
            user="postgres",
            password="root",
            cursor_factory=RealDictCursor
        )
        cursor = conn.cursor()
        print("Connected to the database")
        break
    except Exception as e:
        time.sleep(1)
        print("Error connecting to the database:", e)

app = FastAPI()



@app.get("/")
def getMethod():
    return {"mssg":"This is ROOT"}


# GETTING ALL THE POST DATA USING ORM
@app.get("/posts/", description="This is method to get all the posts of all the users", response_model=List[Post_base])
def get_posts(db:Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    if(posts):
        return posts
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Posts Found")

# GETTING SINGLE POST DATA USING ORM
@app.get("/posts/{post_id}", description="This is the method to get all the posts of single user", response_model=Post_base)
def get_single_post(post_id:int, db:Session = Depends(get_db)):
    try:
        post = db.query(models.Post).filter(models.Post.id==post_id).first()
        if(post):
            return post 
        else:
            return {"mssg":"No Posts Found"}
    except Exception as e:
        print("Exception => ", e)
        print("Error while getting single post")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Posts Found")

# POSTING DATA USING ORM
@app.post("/posts/", description="This is method to post the data ", status_code=status.HTTP_201_CREATED, response_model=Post_response)
def create_post(post:Create_post, db:Session = Depends(get_db)):
    try:
        new_post = models.Post(**dict(post))
        db.add(new_post)
        db.commit()
        db.refresh(new_post)
        return new_post
    except Exception as e:
        print(e)
        return {"mssg":"Error while posting POST"}

# DELETING DATA USING ORM 
@app.delete('/posts/{post_id}')
def delete_post(post_id:int, db:Session = Depends(get_db)):
    try:
        post = db.query(models.Post).filter(models.Post.id == post_id)
        if post.first() == None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Something Went Wrong While Deleting The Post")
        else:
            post.delete(synchronize_session=False)
            db.commit()
            return {"mssg":"Deleted Successfully"}
    except Exception as e:
        print(e)
        return {"mssg":"Error While Deleting Post"}

# UPDATING DATA USING ORM
@app.put('/posts/{post_id}', description="This is used to update the post data", response_model=Post_base)
def update_post(post_id:int, updated_post:Create_post, db:Session = Depends(get_db)):
    post_query = db.query(models.Post).filter(models.Post.id==post_id)
    if post_query.first() == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No User Found")
    else:
        post_query.update(dict(updated_post), synchronize_session=False)
        db.commit()
        return post_query.first()


# CREATING USER
@app.post("/users/", description="This is used to create new user or user registration", response_model=Create_user_response, status_code=status.HTTP_201_CREATED)
def create_user(user:User_base, db:Session = Depends(get_db)):
    # HASHING THE PASSWORD
    hashed_password = pwd_context.hash(user.password)
    user.password = hashed_password
    try:
        new_user = models.Users(**dict(user))
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    except Exception as e:
        print(e)
        return {"error":e}


@app.post("/login/", description="login", summary="login")
def login_user(user:User_base, db:Session = Depends(get_db)):
    email = user.email
    password = user.password
    base_query = db.query(models.Users).filter(models.Users.email == email)
    data = base_query.first()
    if (data):
        hash = data.password
        if (pwd_context.verify(password, hash)):
            return ("Successfuly")
