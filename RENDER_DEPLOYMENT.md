# 🚀 Render Backend Deployment Guide

This guide explains how to deploy the FastAPI backend  using Render.


---

# 📌 What is Render?

Render is a cloud platform used to host backend applications like:
- FastAPI
- Flask
- Node.js
- Django
- APIs and databases

It automatically:
- deploys backend servers
- hosts APIs online
- redeploys whenever GitHub code changes

---

# ✅ Prerequisites

Before starting, make sure you have:

- GitHub account
- Backend pushed to GitHub
- FastAPI backend working locally

---

# 1️⃣ Push Project to GitHub

Your project should already exist on GitHub.

Example:

```text
https://github.com/NandithaNair19/weather-voice-app
```

---

# 2️⃣ Create Render Account

Open:

```text
https://render.com/register
```

Sign up using:
- GitHub
- OR email

Recommended:

```text
Continue with GitHub
```

---

# 3️⃣ Create New Web Service

After logging into Render:

1. Click:

```text
New +
```

2. Select:

```text
Web Service
```

3. Connect your GitHub repository.

4. Choose:

```text
weather-voice-app
```

5. Click:

```text
Connect
```

---

# 4️⃣ Configure Backend Deployment

IMPORTANT:

Since FastAPI exists inside the `backend` folder, configure these settings carefully.

---

# 🛠️ Basic Settings

## Name

Example:

```text
weather-voice-app
```

---

## Root Directory

Set:

```text
backend
```

---

## Runtime

Select:

```text
Python 3
```

---

## Build Command

```text
pip install -r requirements.txt
```

---

## Start Command

```text
python3 -m uvicorn main:app --host 0.0.0.0 --port $PORT
```

This starts the FastAPI server correctly on Render.

---

# 5️⃣ Add Environment Variables

Open:

```text
Environment → Add Environment Variable
```

Add:

| Key                 | Value                 |
| ------------------- | --------------------- |
| WEATHER_API_KEY     | your_weatherapi_key   |
| AZURE_SPEECH_KEY    | your_azure_speech_key |
| AZURE_SPEECH_REGION | your_azure_region     |

example region : centralindia
---

# 6️⃣ Deploy Backend

Click:

```text
Create Web Service
```

Render will now:
- install dependencies
- build backend
- deploy FastAPI server

Deployment may take a few minutes.

---

# 7️⃣ Access Live Backend

After deployment, Render generates a URL like:

```text
https://weather-voice-app.onrender.com
```

---

# 🔄 Automatic CI/CD

Every time you push code to GitHub:

```bash
git push
```

Render automatically:
- redeploys backend
- updates latest API version

No manual redeployment required.

---

# 🌐 Connecting Frontend to Backend

Inside React frontend, replace local backend URL:

```javascript
http://127.0.0.1:8000
```

with deployed Render URL:

```javascript
https://your-render-url.onrender.com
```

---

# 🛠️ Common Errors

## CORS Error

Backend must allow frontend URL:

```python
allow_origins=[
    "http://localhost:3000",
    "https://weather-voice-app.app",
]
```

---

## Build Failed

Usually caused by:
- missing requirements.txt
- wrong root directory
- wrong start command

---

## Backend Sleeping

Free Render services may sleep after inactivity.

First request after inactivity can take:
- 30–60 seconds

This is normal for free tier hosting.

---

# ✅ Final Result

You now have:
- cloud-hosted FastAPI backend
- public API endpoint
- automatic deployment
- CI/CD pipeline connected to GitHub
- frontend + backend fully deployed
