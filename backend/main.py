from fastapi import FastAPI
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
AZURE_SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY")
AZURE_SPEECH_REGION = os.getenv("AZURE_SPEECH_REGION")


class WeatherRequest(BaseModel):
    city: str


@app.get("/")
def home():
    return {"message": "Weather Voice App backend is running"}


@app.post("/weather")
def get_weather(data: WeatherRequest):
    city = data.city

    url = "https://api.weatherapi.com/v1/current.json"

    response = requests.get(
        url,
        params={
            "key": WEATHER_API_KEY,
            "q": city,
            "aqi": "no",
        },
    )

    weather_data = response.json()

    if response.status_code != 200:
        return {
            "error": weather_data.get("error", {}).get(
                "message", "City not found"
            )
        }

    return {
        "city": weather_data["location"]["name"],
        "region": weather_data["location"]["region"],
        "country": weather_data["location"]["country"],
        "temperature": weather_data["current"]["temp_c"],
        "feels_like": weather_data["current"]["feelslike_c"],
        "humidity": weather_data["current"]["humidity"],
        "wind_speed": weather_data["current"]["wind_kph"],
        "condition": weather_data["current"]["condition"]["text"],
    }


@app.get("/azure-token")
def get_azure_token():
    token_url = (
        f"https://{AZURE_SPEECH_REGION}.api.cognitive.microsoft.com/"
        "sts/v1.0/issueToken"
    )

    response = requests.post(
        token_url,
        headers={
            "Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY,
        },
    )

    if response.status_code != 200:
        return {"error": "Could not get Azure speech token"}

    return {
        "token": response.text,
        "region": AZURE_SPEECH_REGION,
    }