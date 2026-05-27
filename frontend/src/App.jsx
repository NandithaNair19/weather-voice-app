import { useState } from "react";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [usedSpeech, setUsedSpeech] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) {
      alert("Please type or speak a place name");
      return;
    }

    setLoading(true);
    setWeather(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/weather", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city }),
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setWeather(data);

        if (usedSpeech) {
          speakWeather(data);
        }
      }
    } catch (error) {
      alert("Could not connect to backend");
    }

    setLoading(false);
  };

  const startListening = async () => {
    setListening(true);

    try {
      const tokenResponse = await fetch("http://127.0.0.1:8000/azure-token");
      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        alert(tokenData.error);
        setListening(false);
        return;
      }

      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
        tokenData.token,
        tokenData.region
      );

      speechConfig.speechRecognitionLanguage = "en-US";

      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();

      const recognizer = new SpeechSDK.SpeechRecognizer(
        speechConfig,
        audioConfig
      );

      recognizer.recognizeOnceAsync((result) => {
        if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
          setCity(result.text);
          setUsedSpeech(true);
        } else {
          alert("Could not recognize speech. Please try again.");
        }

        setListening(false);
        recognizer.close();
      });
    } catch (error) {
      console.error(error);
      setListening(false);
      alert("Azure Speech failed");
    }
  };

  const speakWeather = async (data) => {
    try {
      const tokenResponse = await fetch("http://127.0.0.1:8000/azure-token");
      const tokenData = await tokenResponse.json();

      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
        tokenData.token,
        tokenData.region
      );

      speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

      const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();

      const synthesizer = new SpeechSDK.SpeechSynthesizer(
        speechConfig,
        audioConfig
      );

      const text = `The weather in ${data.city}, ${data.country} is ${data.temperature} degrees Celsius. It feels like ${data.feels_like} degrees. The condition is ${data.condition}. Humidity is ${data.humidity} percent and wind speed is ${data.wind_speed} kilometers per hour.`;

      synthesizer.speakTextAsync(
        text,
        () => {
          synthesizer.close();
        },
        (error) => {
          console.error(error);
          synthesizer.close();
        }
      );
    } catch (error) {
      console.error(error);
      alert("Azure Text to Speech failed");
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Weather Voice App</h1>
        <p className="subtitle">
          Type or speak a place name and get live weather updates.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city, town or village"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setUsedSpeech(false);
            }}
          />

          <button className="mic-btn" onClick={startListening}>
            {listening ? "Listening..." : "🎤 Speak"}
          </button>

          <button className="weather-btn" onClick={getWeather}>
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </div>

        {weather && (
          <div className="weather-card">
            <h2>
              {weather.city}, {weather.country}
            </h2>

            <div className="temp">{weather.temperature}°C</div>

            <p className="condition">{weather.condition}</p>

            <div className="details">
              <div>
                <span>Feels Like</span>
                <strong>{weather.feels_like}°C</strong>
              </div>

              <div>
                <span>Humidity</span>
                <strong>{weather.humidity}%</strong>
              </div>

              <div>
                <span>Wind</span>
                <strong>{weather.wind_speed} kph</strong>
              </div>
            </div>

            <button
              className="speak-again"
              onClick={() => speakWeather(weather)}
            >
              Read Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;