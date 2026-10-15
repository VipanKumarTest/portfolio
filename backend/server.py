from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, ConfigDict, BeforeValidator
from typing import Annotated, Optional
from datetime import datetime, timezone
from pathlib import Path
import os
import logging

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

client = AsyncIOMotorClient(os.environ['MONGO_URL'])
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(str)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict:
        return self.model_dump(by_alias=True, exclude={"id"})

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls.model_validate(doc)


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    project_type: str = Field(default="General", max_length=60)
    message: str = Field(min_length=5, max_length=4000)


class ContactMessage(BaseDocument):
    name: str
    email: str
    project_type: str
    message: str
    created_at: str


@api_router.get("/")
async def root():
    return {"message": "Vipan Kumar portfolio API"}


@api_router.post("/contact")
async def create_contact(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump(), created_at=datetime.now(timezone.utc).isoformat())
    res = await db.contact_messages.insert_one(msg.to_mongo())
    msg.id = str(res.inserted_id)
    return {"ok": True, "id": msg.id, "message": "Thanks! Your message has been received."}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
