from fastapi import FastAPI
from .database.connection import get_psycopg2_connection
from app.routers import user_route

from .database.connection import engine, get_db

app = FastAPI()

# Connecting To Database
get_psycopg2_connection()

# User Route
app.include_router(user_route.router)
