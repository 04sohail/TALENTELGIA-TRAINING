from pydantic import BaseModel

class Post(BaseModel):
    id:int = None
    title:str = None
    content:str = None
    published:bool = None
