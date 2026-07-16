from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# Load trained model
model = joblib.load("sales_prediction_model.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    tv = float(request.form["TV"])
    radio = float(request.form["Radio"])
    newspaper = float(request.form["Newspaper"])

    data = pd.DataFrame({
        "TV": [tv],
        "Radio": [radio],
        "Newspaper": [newspaper]
    })

    prediction = model.predict(data)[0]

    return render_template(
        "index.html",
        prediction=f"{prediction:.2f}",
        tv=tv,
        radio=radio,
        newspaper=newspaper
    )


if __name__ == "__main__":
    app.run(debug=True)