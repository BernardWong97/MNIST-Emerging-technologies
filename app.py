# Imports
from flask import Flask, render_template, request
from PIL import Image
from io import BytesIO
import numpy as np
import base64
import PIL.ImageOps as pilops

import sys
import os

sys.path.append(os.path.abspath("./model"))
from load import *

# Instantiate web application
app = Flask(__name__)
model, graph = init()

# Home page route
@app.route('/')
def home():
    return render_template("index.html")


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    imgbase64 = request.values.get("imgUrl", "0")
    decodedimg = base64.b64decode(imgbase64.split(',')[1])
    image = Image.open(BytesIO(decodedimg))
    image = image.convert('L')
    image = pilops.invert(image)
    image.save('output.png')

    x = Image.open('output.png')
    x = x.resize((28, 28))
    x = np.array(x)

    x = x.reshape(1, 28, 28, 1).astype(np.uint8)

    with graph.as_default():
        out = model.predict(x)
        print(out)
        print(np.argmax(out, axis=1))
        response = np.array_str(np.argmax(out, axis=1))
        return response


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
