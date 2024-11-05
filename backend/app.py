from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)  

model_path = 'Brain_Stroke_SVM_model.joblib'
model = load(model_path)

label_map = {0: 'No Stroke', 1: 'Stroke', 2: 'Glioma', 3: 'Meningioma', 4: 'Pituitary', 5: 'Phemonia'}

recommendations = {
    'Pneumonia': 'Get plenty of rest and fluids. Consult with your doctor for antibiotics.',
    'Meningioma': 'Follow up with your neurologist. Surgery may be required.',
    'Glioma': 'Consult an oncologist. Treatment may include surgery, radiation, or chemotherapy.',
    'Pituitary': 'Hormone therapy may be required. Follow up with an endocrinologist.',
    'Stroke':'Eat a healthy diet: Eat a diet rich in fruits and vegetables, and low in salt, cholesterol, and saturated and trans fats. '
}

@app.route('/', methods=['POST'])
def predict_tumor():
    
    if 'file' not in request.files:
        return jsonify({'error': 'No image file uploaded'}), 400

    try:
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        
        file_bytes = np.frombuffer(file.read(), np.uint8)
        input_img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

        if input_img is None:
            return jsonify({'error': 'Invalid image format'}), 400

        input_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2RGB)
        input_img = cv2.resize(input_img, (64, 64)) 

        input_img = input_img.flatten().reshape(1, -1)

        prediction = model.predict(input_img)
        predicted_label = label_map.get(prediction[0], 'Unknown')

        response = {'prediction': predicted_label}

        if predicted_label != 'Normal':
            response['tips'] = recommendations.get(predicted_label, 'No specific recommendations available.')

        return jsonify(response)

    except Exception as e:
        print(f"An error occurred: {e}")
        return jsonify({'error': f'Internal server error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)