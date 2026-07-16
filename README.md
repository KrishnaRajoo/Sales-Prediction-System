# 📈 Sales Prediction Dashboard using Machine Learning

A modern web application that predicts product sales based on advertising expenditure across **TV**, **Radio**, and **Newspaper** campaigns. The application uses a trained **Extra Trees Regressor** model and provides an interactive analytics dashboard built with **Flask**, **HTML**, **CSS**, and **JavaScript**.

---
Live Application:[https://sales-prediction-system-rjgr.onrender.com]
---

## 🚀 Live Features

- 📊 Predict sales using advertising budgets
- ⚡ Instant predictions with a Machine Learning model
- 📈 Interactive budget analytics
- 📱 Fully responsive dashboard
- 🎨 Modern light-themed UI
- 📋 Budget summary section
- 📉 Live progress indicators
- 🤖 Model information panel
- 💡 Sales recommendations based on predicted values

---

## 🖼️ Dashboard Preview

> Add screenshots of your application here.

Example:

```
images/
├── home.png
├── prediction.png
└── mobile-view.png
```

---

## 📂 Project Structure

```
Sales-Prediction/
│
├── static/
│   ├── style.css
│   ├── responsive.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── sales_prediction_model.pkl
├── Advertising.csv
├── requirements.txt
└── README.md
```

---

## 📊 Dataset

The project uses the **Advertising Dataset**, which contains advertising expenditure across different media platforms.

### Features

| Feature | Description |
|----------|-------------|
| TV | TV advertising budget |
| Radio | Radio advertising budget |
| Newspaper | Newspaper advertising budget |

### Target

- Sales

---

## 🤖 Machine Learning Workflow

1. Load dataset
2. Data preprocessing
3. Feature selection
4. Train-test split
5. Model training
6. Model evaluation
7. Model serialization using Joblib
8. Flask web deployment

---

## 🧠 Machine Learning Model

**Algorithm Used**

- Extra Trees Regressor

### Evaluation Metrics

- R² Score
- Mean Absolute Error (MAE)
- Root Mean Squared Error (RMSE)

---

## 💻 Technologies Used

### Programming Language

- Python

### Machine Learning

- Scikit-learn
- Pandas
- NumPy

### Backend

- Flask

### Frontend

- HTML5
- CSS3
- JavaScript

### Deployment

- Render

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/krishnarajoo/Sales-Prediction-System
```

Move into the project directory

```bash
cd Sales-Prediction
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the application

```bash
python app.py
```

Open your browser

```
http://127.0.0.1:5000/
```

---

## 📌 How It Works

1. Enter the advertising budget for:
   - TV
   - Radio
   - Newspaper

2. Click **Predict Sales**

3. The application will:

- Predict expected sales
- Display the forecast
- Show budget analytics
- Provide sales recommendations

---

## 📱 Responsive Design

The dashboard is optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Phones

---

## 📸 Screenshots

### Home Dashboard

> Add screenshot here

---

### Prediction Result

> Add screenshot here

---

### Mobile View

> Add screenshot here

---

## 📈 Future Improvements

- Interactive charts using Chart.js
- Historical prediction tracking
- CSV file upload for batch prediction
- User authentication
- Prediction history
- Export prediction reports
- Dark mode support
- Cloud database integration

---

## 👨‍💻 Author

**Krishna Rajoo**

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.