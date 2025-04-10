from pydantic import BaseModel, EmailStr, field_validator 
from datetime import datetime

class Post_base(BaseModel):
    title:str
    content:str 
    published:bool
    class Config:
        orm_mode = True

class Create_post(Post_base):
    pass

class Post_response(Post_base):
    created_at:datetime
    
class User_base(BaseModel):
    email:EmailStr
    password:str
    class Config:
        orm_mode = True
    @field_validator("email")
    def validate_email(cls, value):
        allowed_domains = ["example.com", "test.com", "gmail.com", 'talent.com']
        domain = value.split("@")[1]
        if domain not in allowed_domains:
            raise ValueError(f"Email must be from one of the following domains: {', '.join(allowed_domains)}")
        return value
    @field_validator("password")
    def validate_password(cls, value):
        if len(value) < 8:
            raise ValueError("Password must be at least 8 characters long")
        if not any(char.isdigit() for char in value):
            raise ValueError("Password must contain at least one digit")
        if not any(char.isupper() for char in value):
            raise ValueError("Password must contain at least one uppercase letter")
        if not any(char.islower() for char in value):
            raise ValueError("Password must contain at least one lowercase letter")
        if not any(char in "!@#$%^&*()-_=+[]{};:'\",.<>?/\\|`~" for char in value):
            raise ValueError("Password must contain at least one special character")
        return value

class Create_user_response(BaseModel):
    email:EmailStr
    created_at:datetime
