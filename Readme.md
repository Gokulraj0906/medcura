# AI Brain Stroke and Tumor Image Classification

## Introduction

Welcome to the **AI Brain Stroke and Tumor Image Classification** project! This application is designed to classify brain images for identifying conditions like stroke and various types of tumors. By leveraging Scikit-Learn for model training and a React frontend for user interaction, this project aims to support healthcare professionals with accurate, real-time classification.

## Key Features

- **Accurate Image Classification**: Trained using Scikit-Learn, this model categorizes different brain conditions to assist in early diagnosis and treatment planning.
- **Interactive Frontend**: A React-based interface allows users to upload brain images and view classification results with ease.
- **Streamlined Model Deployment**: The pre-trained model can be loaded directly from Google Drive for quick deployment, making it scalable and easy to maintain.

## Technologies Used

- **Machine Learning (Scikit-Learn)**: For training the brain stroke and tumor classification model.
- **Python (Flask)**: Backend setup to handle model loading, image processing, and API endpoints.
- **Google Drive Integration**: Model file is stored on Google Drive, allowing for easy access and updates.
- **React**: Frontend framework for building an interactive and responsive user interface.
- **Node.js & npm**: For managing frontend dependencies and building the React app.

## Installation and Setup

Follow these steps to set up the Brain Stroke and Tumor Classification App on your local machine:

### Backend Setup

1. **Download and Unzip the Model**  
   - Download the model zip file from [Google Drive](https://drive.google.com/file/d/1bm8KK24pD3YjjKeF4_Xf0G7nuoLb_Y5_/view?usp=sharing).
   - Unzip the file to extract the saved model (e.g., in `.joblib` format).

2. **Place Model in Backend Directory**  
   - Move the extracted model file into the `backend` folder of your application, ensuring it’s in an accessible location for the app’s code.

3. **Load the Model in `app.py`**  
   - In your `app.py` file, replace `"model_path"` on line 10 with the actual path to the saved model in the backend directory. Example:
     ```python
     from joblib import load
     model = load("backend/saved_model.joblib")  # Adjust path if necessary
     ```

4. **Install Dependencies**  
   - Install all required libraries by running:
     ```bash
     pip install -r requirements.txt
     ```
   - This will install `joblib`, `Flask`, `scikit-learn`, and any other dependencies needed to run the backend.

5. **Start the Backend Server**
   - Run the following command to start the Flask server:
     ```bash
     python app.py
     ```

### Frontend Setup

1. **Install Frontend Dependencies**  
   - Navigate to the frontend directory and run:
     ```bash
     npm install
     ```
   - This command will install all necessary frontend libraries listed in `package.json`.

2. **Start the Frontend Server**
   - Run the following command to start the React app:
     ```bash
     npm start
     ```

3. **Frontend Customization**  
   - You can customize components, styles, and other UI elements as needed in the React app.

## Usage

Once both the backend and frontend servers are running, you can open the React app in your browser. The app allows you to upload brain images for classification, and it will display results based on the model’s analysis.

## Contact

For any questions or feedback, please reach out to the project maintainer at <a href="mailto:gokulsenthil0906@gmail.com">Email</a>.
