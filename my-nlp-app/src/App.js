import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        text,
      });
      setPrediction(response.data.prediction);
      console.log(response.data.prediction);
    } catch (error) {
      console.error("There was an error making the request!", error);
    }
  };

  return (
    <div className="App">
      <h1>NLP Prediction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Prediction: {prediction === 0 ? "Negitive Comment" : "Positive Comment"}
      </p>
    </div>
  );
}

export default App;
