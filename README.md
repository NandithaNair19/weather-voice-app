# Weather Voice App 🌦️🎙️

An AI-powered full-stack weather voice application that lets users type or speak any place name and get live weather updates. The app supports Speech-to-Text and Text-to-Speech using Microsoft Azure Speech Services.

---

# Live Demo

Frontend: Add your Vercel link here  
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
- Responsive glassmorphism UI
- FastAPI backend with secure API handling
- React + Vite frontend
- Publicly deployed web app
- GitHub Actions CI/CD
- Mobile app conversion using Capacitor

---

# Tech Stack

## Frontend
- React
- Vite
- CSS
- Microsoft Cognitive Services Speech SDK
- Vercel

## Backend
- FastAPI
- Python
- WeatherAPI.com
- Azure Speech Services
- Render

## Mobile
- Capacitor
- Android Studio
- Xcode

---

# Project Structure

```text
weather-voice-app/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── package.json
│   └── capacitor.config.json
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

---

# Environment Variables

Create a `.env` file inside the `backend` folder:

```env
WEATHER_API_KEY=your_weatherapi_key
AZURE_SPEECH_KEY=your_azure_speech_key
AZURE_SPEECH_REGION=your_azure_region
```

---

# Run Locally

## Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Health Check

```http
GET /
```

Returns:

```json
{
  "message": "Weather Voice App backend is running"
}
```

---

## Get Weather

```http
POST /weather
```

Request:

```json
{
  "city": "Bangalore"
}
```

---

## Azure Token

```http
GET /azure-token
```

Returns a temporary Azure Speech token for frontend STT/TTS.

---

# Deployment

## Backend Deployment (Render)

Render settings:

```text
Root Directory: backend
Build Command: pip install -r requirements.txt
Start Command: uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## Frontend Deployment (Vercel)

Vercel settings:

```text
Root Directory: frontend
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

---

# Mobile App Conversion

This project is being converted into a mobile app using Capacitor.

## Android

```bash
cd frontend
npm install @capacitor/core @capacitor/cli
npx cap init
npm run build
npm install @capacitor/android
npx cap add android
npx cap sync android
npx cap open android
```

---

## iOS

```bash
npm install @capacitor/ios
npx cap add ios
npx cap sync ios
npx cap open ios
```

---

# CI/CD

GitHub Actions workflow checks:

- Backend dependency installation
- FastAPI import validation
- Frontend dependency installation
- Vite production build

---

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
