# Imports
import flask as fl

# Instantiate web application
app = fl.Flask(__name__)


# Home page route
@app.route('/')
def home():
    return app.send_static_file('index.html')
