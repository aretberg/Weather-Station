from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/weather_data")
def get_weather_data_json():
    return {"tempf":"25", "humidity":"50.2"}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)