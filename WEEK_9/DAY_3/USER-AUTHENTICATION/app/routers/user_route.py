from fastapi import APIRouter, HTTPException, status, Depends
from passlib.context import CryptContext
from ..schemas import User, Create_user_response
from ..models import user
from sqlalchemy.orm import Session
from ..database.connection import get_db

router = APIRouter(prefix="/users", )

pwd_context = CryptContext(schemes=['bcrypt'], deprecated="auto")

# CREATING USER
@router.post("/register/", description="This is used to create new user or user registration", response_model=Create_user_response, status_code=status.HTTP_201_CREATED)
def create_user(user_schema:User, db:Session = Depends(get_db)):
    """Create a new user."""
    # HASHING THE PASSWORD
    hashed_password = pwd_context.hash(user_schema.password)
    user_schema.password = hashed_password
    try:
        new_user = user.Users(**dict(user_schema))
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return new_user
    except Exception as e:
        print(e)
        return {"error":e}


@router.post("/login/", description="login", summary="login")
def login_user(user:User, db:Session = Depends(get_db)):
    email = user.email
    password = user.password
    base_query = db.query(user.Users).filter(user.Users.email == email)
    data = base_query.first()
    if (data):
        hash = data.password
        if (pwd_context.verify(password, hash)):
            return ("Successfuly")
