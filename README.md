# Weather Voice App 🌦️🎙️

An AI-powered full-stack weather voice application that lets users type or speak any place name and get live weather updates. The app supports Speech-to-Text and Text-to-Speech using Microsoft Azure Speech Services.

---

# Live Demo

Frontend: https://weather-voice-app.vercel.app/ 
Backend: https://weather-voice-app-g7ai.onrender.com

---

# Features

- Search weather by city, town, village, or country
- Voice input using Azure Speech-to-Text
- Weather response with:
  - temperature
  - feels-like
  - humidity
  - wind speed
  - weather condition
- Text-to-Speech weather reading using Azure Speech
- Conditional speaking:
  - app speaks only when user uses microphone
- FastAPI backend with secure API handling
- React + Vite frontend
- Publicly deployed web app
- GitHub Actions CI/CD
- 
---

# Tech Stack

| Category | Technology | Version |
|---|---|---|
| Frontend | React | 18+ |
| Frontend Build Tool | Vite | 5+ |
| Styling | CSS3 | Latest |
| Backend | FastAPI | Latest |
| Backend Language | Python | 3.11+ |
| Speech Services | Azure Cognitive Services | F0 Tier |
| Weather API | WeatherAPI.com | Free Tier |
| Deployment | Vercel | Latest |
| Backend Hosting | Render | Latest |
| CI/CD | GitHub Actions | Latest |
| Mobile Conversion | Capacitor | Latest |
| Package Manager | npm | 10+ |
| Version Control | Git & GitHub | Latest |

---

# 📁 Project Structure

```text
weather-voice-app/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│   └── venv/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── capacitor.config.json
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── README.md
├── run.sh
└── setup.sh
```
---

# ⚙️ Local Development Setup

## 📌 Prerequisites

Before running this project, install:

| Software | Version |
|---|---|
| Python | 3.11+ |
| Node.js | 20+ |
| npm | 10+ |
| Git | Latest |
| VS Code | Recommended |

---

# 🔑 API Key Setup

You need:

1. WeatherAPI key
2. Azure Speech Service key

---

## 🌤️ WeatherAPI Setup

1. Visit:
https://www.weatherapi.com/

2. Create account

3. Generate API key

---

## 🎤 Azure Speech Service Setup

1. Open Azure Portal

2. Create:
- Speech Service Resource

3. Select:
- Pricing Tier: F0 (Free)

4. Copy:
- Speech Key
- Region

---

# 🔐 Environment Variables

Create:

```text
backend/.env
```

Add:

```env
WEATHER_API_KEY=your_weather_api_key
AZURE_SPEECH_KEY=your_azure_speech_key
AZURE_SPEECH_REGION=your_azure_region
```

---

# 🛠️ Backend Setup

## Step 1 — Navigate to Backend

```bash
cd backend
```

---

## Step 2 — Create Virtual Environment

Why?

A virtual environment isolates project dependencies from your global Python installation.

```bash
python3 -m venv venv
```

---

## Step 3 — Activate Virtual Environment

### macOS/Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

---

## Step 4 — Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Step 5 — Start FastAPI Server

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup

## Step 1 — Navigate to Frontend

```bash
cd frontend
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

---

## Step 3 — Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 📡 API Documentation

---

# GET /

Health check route.

## Example Request

```http
GET /
```

## Example Response

```json
{
  "message": "Weather Voice App backend is running"
}
```

---

# POST /weather

Returns weather information.

## Request

```json
{
  "city": "Bangalore"
}
```

## Response

```json
{
  "city": "Bangalore",
  "country": "India",
  "temperature": 29,
  "feels_like": 32,
  "humidity": 68,
  "wind_speed": 15,
  "condition": "Partly cloudy"
}
```

---

# GET /azure-token

Returns temporary Azure Speech token.

## Example Response

```json
{
  "token": "azure_token_here",
  "region": "centralindia"
}
```

---

# 🎤 Voice Recognition & AI Workflow

## Speech-to-Text Flow

```text
User Speech
     ↓
Azure Speech SDK
     ↓
Text Conversion
     ↓
Weather API Request
```

---

## Text-to-Speech Flow

```text
Weather Response
       ↓
Azure Speech Synthesis
       ↓
Voice Output
```

---

# 🧪 API Testing with Postman

## Test Weather Endpoint

### Method

```text
POST
```

### URL

```text
https://weather-voice-app-g7ai.onrender.com/weather
```

### Body

```json
{
  "city": "Delhi"
}
```

---

# 🚀 Deployment

## Frontend

Deployed using **[Vercel](VERCEL_DEPLOYMENT.md)**

## Backend

Deployed using **[Render](RENDER_DEPLOYMENT.md)**


# CI/CD

GitHub Actions workflow checks:

- Backend dependency installation
- FastAPI import validation
- Frontend dependency installation
- Vite production build

---

# 💰 Cost Breakdown

This project is designed to run almost completely on free-tier services for development, testing, and student/demo usage.

---

## 📦 Services Used

| Service | Purpose | Free Tier | Estimated Cost |
|---|---|---|---|
| React + Vite | Frontend | Fully Free | $0 |
| FastAPI | Backend Framework | Fully Free | $0 |
| WeatherAPI.com | Real-time weather data | Free developer tier | $0 |
| Microsoft Azure Speech Services | Speech-to-Text + Text-to-Speech | F0 Free Tier | $0 |
| GitHub | Version Control + CI/CD | Free | $0 |
| GitHub Actions | CI/CD Pipeline | 2000 free minutes/month | $0 |
| Render | Backend Deployment | Free Tier | $0 |
| Vercel | Frontend Deployment | Free Tier | $0 |

---

## ☁️ Azure Speech Services Free Tier

The application uses Microsoft Azure AI Speech Services for:

- 🎙️ Speech-to-Text (STT)
- 🔊 Text-to-Speech (TTS)

### Free Tier Includes

| Feature | Free Usage |
|---|---|
| Speech-to-Text | 5 audio hours/month |
| Neural Text-to-Speech | 500,000 characters/month |


---

## 🌦️ WeatherAPI.com Free Tier

The application fetches live weather data using WeatherAPI.com.

### Free Tier Includes

| Feature | Limit |
|---|---|
| API Requests | ~1 million/month |
| Real-time Weather | Included |
| Global Locations | Included |

This is more than enough for development and demo usage.


---

## 📊 Expected Monthly Cost

| Usage Type | Estimated Cost |
|---|---|
| Student / Demo Usage | $0 |
| Small Portfolio Project | $0 |
| Moderate Traffic | Usually still free |

---

## 📝 Notes

- The project is fully usable under free-tier limits.
- Costs may only arise if deployed at very large production scale.
# Security

- API keys are stored only in backend environment variables
- Frontend never directly exposes WeatherAPI or Azure keys
- Azure Speech token is generated securely through backend routes

---

# Future Improvements

- Weather icons
- Animated backgrounds
- Multilingual speech support
- Voice selection
- Search history
- Favorite cities
- PWA install support
- Android APK generation
- iOS app build
- Better animations and transitions

---

# Author

Nanditha Nair  
GitHub: NandithaNair19
