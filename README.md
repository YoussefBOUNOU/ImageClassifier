# **ImageClassifier Web App with Vision Transformer (ViT)**

## **Introduction**

The ImageClassifier Web App is an image classification application that uses Google's Vision Transformer (ViT) pretrained model. The application allows users to upload images and classify them using the ViT model. It is built with a Django backend, React.js frontend, and Django Rest Framework for the API.

## **Screenshots**
Here are some screenshots of the ImageClassifier Web App:

### **Home Page**
![Home Page](screenshots/Home.png)

### **PhoneView **
![PhoneView](screenshots/PhoneView.png)

### **Classification Results**
![Classification Results](screenshots/Results.png)

### **History**
![History](screenshots/history.png)

## **Installation**

To install the ImageClassifier Web App, follow these steps:

### **Backend Setup**

1. Clone the repository: **`git clone https://github.com/YoussefBOUNOU/ImageClassifier.git`**
2. Navigate to the backend directory: **`cd ImageClassifier/backend`**
3. Create a virtual environment:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
4. Install dependencies: **`pip install -r requirements.txt`**
5. Apply migrations: **`python manage.py migrate`**
6. Run the development server: **`python manage.py runserver`**

### **Frontend Setup**

1. Navigate to the frontend directory: **`cd ../frontend`**
2. Install dependencies: **`npm install`**
3. Run the frontend development server: **`npm start`**

### **Frontend Dependencies**

The `requirements.txt` for the frontend dependencies should include:

```plaintext
react
react-dom
react-dropzone
react-bootstrap
axios
react-router-dom
```

You can install these dependencies by running:
**` npm install react react-dom react-dropzone react-bootstrap axios react-router-dom `**

### **Usage**

To use the ImageClassifier Web App, follow these steps:

1. Access the application: Open your browser and navigate to **`http://localhost:3000/`**.
2. Upload an image: Use the interface to upload an image you want to classify.
3. View results: The classification results will be displayed after processing.



