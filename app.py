# Imports
from flask import Flask, render_template, request
from PIL import Image
from io import BytesIO
import numpy as np
import base64


# Instantiate web application
app = Flask(__name__)


# Home page route
@app.route('/')
def home():
    return render_template("index.html")


@app.route('/predict', methods=['GET', 'POST'])
def receive():
    imgbase64 = request.values.get("imgUrl", "0")
    print(imgbase64)
    img = Image.open(BytesIO(base64.b64decode(imgbase64)))

    return "Result"
