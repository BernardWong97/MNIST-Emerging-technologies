from flask import Flask, escape, request

app = Flask(__name__)


@app.route('/')
def test():
    name = request.args.get("name", "Testing")
    return f'Hello, {escape(name)}'
