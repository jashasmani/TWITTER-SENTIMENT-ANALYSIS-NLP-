import React, { useState } from "react";
import axios from "axios";
import "./Comments.css";

function Comments() {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        "https://twitter-sentiment-analysis-nlp.onrender.com/predict",
        {
          text,
        }
      );
      setPrediction(response.data.prediction);
      setLoading(false);
    } catch (error) {
      console.error("There was an error making the request!", error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="comments-container">
      <form onSubmit={handleSubmit} className="comments-form">
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Comment..."
          className="comments-textarea"
        />
        <button type="submit" className="comments-submit-button">
          Submit
        </button>
      </form>
      <p className="prediction">
        {loading ? (
          <span>Loading...</span>
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
  );
}

export default Comments;
