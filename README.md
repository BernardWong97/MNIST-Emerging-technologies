# MNIST-Emerging-technologies Project
A Flask web application that recognise handwritten digits with Convolutional Neural Network.

## Getting Started
Clone this git repo.
```bash
$ git clone https://github.com/BernardWong97/MNIST-Emerging-technologies
```

### Prerequisites
#### Linux
Install requirements in the requirement.txt file:
```bash
$ pip install -r requirement.txt
```

#### Windows
Download and install [Anaconda](https://www.anaconda.com/distribution/#download-section). (Ignore if installed) 
Install requirements:
```bash
$ conda install -c anaconda flask
$ conda install -c conda-forge keras tensorflow
$ conda install -c anaconda pillow
$ conda install -c conda-forge opencv
```

## Run
Type the terminal command below to run the flask web app.
```bash
python app.py
```

## Model
Uses Keras Sequential Convolutional Neural Network with only 2 hidden layers.  
Trained on MNIST datasets with 12 epochs and 128 batch size.

## Notes
- I uses Oracle VM VirtualBox 6.0.14 on Windows 10 running Ubuntu64 (Linux Mint) to develop and run this application.

## Researches

These are the references/researches to help build the program:
- [GitHub - akashdeepjassal](https://github.com/akashdeepjassal/mnist-flask)
- [MNIST data](http://yann.lecun.com/exdb/mnist/)
- [Maching Learning Mastery - Handwritten Digit Recognition using Convolutional Neural Networks in Python 
with Keras](https://machinelearningmastery.com/handwritten-digit-recognition-using-convolutional-neural-networks-python-keras/)
- [Create a Drawing App with HTML5 Canvas and JavaScript](http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/)
- [Pytorials - MNIST Handwritten digits classification using Keras (part – 1)](https://www.pytorials.com/mnist-handwritten-digits-classification-using-keras/)
- [Pytorials - How to deploy Keras model to production using flask (part – 2) ](https://www.pytorials.com/deploy-keras-model-to-production-using-flask/)
- [How to classify MNIST digits with different neural network architectures](https://medium.com/tebs-lab/how-to-classify-mnist-digits-with-different-neural-network-architectures-39c75a0f03e3)
- [How to Develop a CNN for MNIST Handwritten Digit Classification](https://machinelearningmastery.com/how-to-develop-a-convolutional-neural-network-from-scratch-for-mnist-handwritten-digit-classification/)


## Author
**Bernard Wong** (https://github.com/BernardWong97)
