import requests
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("currencyindex.html")

@app.route("/convert", methods=["POST"])
def convert():

	#Querry For currency Exchange
	currency = request.form.get("currency")
	res = requests.get("https://api.iban.com/clients/api/currency/convert/",
		params = {"from": "USD","to": currency})

	#Make Sure Request succeeded
	if res.status_code != 200:
		return jsonify({"success":False})

	#MAke Sure currency is in response
	data = res.json()
	if currency not in data ["rates"]:
		return jsonify({"success": False})

	return jsonify({"success":True, "rate":data["rates"][currency]})