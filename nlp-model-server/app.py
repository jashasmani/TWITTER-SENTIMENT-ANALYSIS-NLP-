from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

nltk.download('stopwords')

app = Flask(__name__)
CORS(app)

model = pickle.load(open('trained_model.sav', 'rb'))
vectorizer = pickle.load(open('tfidf_vectorizer.sav', 'rb'))

port_stem = PorterStemmer()

def preprocess_text(text):
    text = re.sub('[^a-zA-Z]', ' ', text)
    text = text.lower()
    text = text.split()
    text = [port_stem.stem(word) for word in text if not word in stopwords.words('english')]
    return ' '.join(text)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get('text')
    processed_text = preprocess_text(text)
    text_features = vectorizer.transform([processed_text])
    prediction = model.predict(text_features)[0]
    prediction = int(prediction)  # Convert numpy.int64 to int
    sentiment = "Positive" if prediction == 1 else "Negative"
    return jsonify({'prediction': prediction, 'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
