import os 
import requests

from flask import Flask, jsonify, render_template, request
from flask_socketio import SocketI
O
app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socket.io = SocketIO(app)

@app.route("/")
def index():
	return render_template("indexfile.html")

@socketio.on("submit vote")
def vote(data):
	selection = data["selection"]
	emit("announce vote", {"selection" : selection})