from fastapi import FastAPI, Query, Path, Response, status, HTTPException               
from fastapi.params import Body
from pydantic import BaseModel
from enum import Enum
from typing import Optional, Annotated

app = FastAPI()

my_posts = [
    {
        'id': 1,
        'title':"title 1",
        "body":'body 1',
        'published':False
    },
    {
        'id': 2,
        'title':"title 2",
        "body":'body 2',
        'published':True
    }
]   

@app.get("/")
def getMethod():
    return {"mssg":"This is ROOT"}

# GETTING ALL THE POST DATA
@app.get("/posts/", description="This is method to get all the posts of all the users")
def get_posts():
    return {"data": my_posts}

# GETTING SINGLE POST DATA
@app.get("/posts/{post_id}", description="This is the method to get all the posts of single user")
def get_single_post(post_id:int):
    for post in my_posts:
        if post.get("id") == post_id:
            return {'post':post}
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Error mssg")

# POSTING DATA
class Post(BaseModel):
    id:int
    title:str
    body:str
    published:bool

@app.post("/posts/", description="This is method to post the data ", status_code=status.HTTP_201_CREATED)
def create_post(post:Post):
    my_posts.append(dict(post))
    return {"mssg":"Posted Successfully"}

# DELETING DATA
@app.delete('/posts/{post_id}')
def delete_post(post_id:int):
    for index,post in enumerate(my_posts):
        if post['id']==post_id:
            del my_posts[index]
    response_body = {
        "mssg":"Removed successfully"   
    }
    return response_body

# UPDATING DATA
@app.put('/posts/{post_id}')
def update_post(post_id:int, body:Post):
    for index, post in enumerate(my_posts):
        if post['id'] == post_id:
            my_posts[index] = body
            return{'mssg':'post edited successfully'}
    return {"mssg":"error while editing the post"}
