from fastapi import FastAPI

app = FastAPI()

@app.get("/get")
def gettingUser():
    return {"get":"This is used to get user"}

@app.post("/post")
def postingUser():
    return {'post':"This is used to post User"}
