from ..database.connection import Base
from sqlalchemy import Column, Integer, String, Boolean, TIMESTAMP
from sqlalchemy.sql.expression import text

class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, nullable=False, primary_key=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=text("now()"))
    updated_at = Column(TIMESTAMP, nullable=False, server_default=text("now()"))
