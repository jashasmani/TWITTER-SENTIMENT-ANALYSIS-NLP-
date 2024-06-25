import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setPrediction(null);
    try {
      const response = await axios.post("https://twitter-sentiment-analysis-nlp.onrender.com/predict", {
      // const response = await axios.post("http://localhost:8000/predict", {
        text,
      });
      setPrediction(response.data.prediction);
      setLoading(false);
    } catch (error) {
      console.error("There was an error making the request!", error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div style={{ margin: "1.5rem" }}>
          <span
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
              fontSize: "1.5rem",
            }}
          >
            Twitter Sentiment Analysis with NLP
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Comment..."
            className="input-text"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p className="prediction">
          {loading ? (
            <span>Loading...</span>
          ) : prediction === null ? (
            ""
          ) : prediction === 0 ? (
            <span style={{ color: "Red" }}>Negative Comment</span>
          ) : (
            <span style={{ color: "Green" }}>Positive Comment</span>
          )}
        </p>
        <p className="error">
          {error ? (
            <span>Error: Please check your input and try again.</span>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default App;
