from fastapi import FastAPI, Query, Path, Response, status, HTTPException, Depends             
from fastapi.params import Body
from pydantic import BaseModel
from enum import Enum
from typing import Optional, Annotated
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from .models import models
from .database.connection import engine, get_db
from sqlalchemy.orm import Session
from .schemas import Post

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

# DEMO / TEST
# @app.get("/test")
# def test(db:Session = Depends(get_db)):
#     posts = db.query(models.Post)
#     print(posts)
#     return {"data":"sucess"}


# GETTING ALL THE POST DATA USING ORM
@app.get("/posts/", description="This is method to get all the posts of all the users")
def get_posts(db:Session = Depends(get_db)):
    posts = db.query(models.Post).all()
    if(posts):
        response_body = {
            "response":posts
        }
        return response_body
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Posts Found")

# GETTING SINGLE POST DATA USING SQL QUERY
# @app.get("/posts/{post_id}", description="This is the method to get all the posts of single user")
# def get_single_post(post_id:int):
#     cursor.execute("""SELECT * FROM posts WHERE id = {}""".format(post_id))
#     post = cursor.fetchone()
#     if(post):
#         print(post)
#         response_body = {
#             "response":post
#         }
#         return response_body
#     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Posts Found")


# GETTING SINGLE POST DATA USING ORM
@app.get("/posts/{post_id}", description="This is the method to get all the posts of single user")
def get_single_post(post_id:int, db:Session = Depends(get_db)):
    try:
        post = db.query(models.Post).filter(models.Post.id==post_id).first()
        if(post):
            return {"data":post}    
        else:
            return {"mssg":"No Posts Found"}
    except Exception as e:
        print("Exception => ", e)
        print("Error while getting single post")
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No Posts Found")

# POSTING DATA USING SQL QUERY
# @app.post("/posts/", description="This is method to post the data ", status_code=status.HTTP_201_CREATED)
# def create_post(post:Post):
#     try:
#         cursor.execute("""INSERT INTO posts VALUES ({}, '{}', '{}', {});""".format(post.id, post.title, post.content, post.published))
#         conn.commit()
#         return {"mssg":"Posted Successfully"}
#     except Exception as e:
#         print(e)
#         return {"mssg":"Error while posting POST"}

# POSTING DATA USING ORM
@app.post("/posts/", description="This is method to post the data ", status_code=status.HTTP_201_CREATED)
def create_post(post:Post, db:Session = Depends(get_db)):
    try:
        new_post = models.Post(**dict(post))
        db.add(new_post)
        db.commit()
        db.refresh(new_post)
        return {"mssg":"Posted Successfully", "data":new_post}
    except Exception as e:
        print(e)
        return {"mssg":"Error while posting POST"}

# DELETING DATA USING SQL QUERY 
# @app.delete('/posts/{post_id}')
# def delete_post(post_id:int):
#     try:
#         cursor.execute("""DELETE FROM posts WHERE id = {};""".format(post_id))
#         conn.commit()
#         return{"mssg":"Post Deleted Successfully"}
#     except Exception as e:
#         print(e)
#         return {"mssg":"Error While Deleting Post"}

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
            return{"mssg":"Post Deleted Successfully"}
    except Exception as e:
        print(e)
        return {"mssg":"Error While Deleting Post"}

# UPDATING DATA USING ORM
@app.put('/posts/{post_id}')
def update_post(post_id:int, updated_post:Post, db:Session = Depends(get_db)):
    post_query = db.query(models.Post).filter(models.Post.id==post_id)
    if post_query.first() == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No User Found")
    else:
        post_query.update(dict(updated_post), synchronize_session=False)
        db.commit()
        return {"mssg":"Post updated Successfully", "Updated Post":post_query.first()}
