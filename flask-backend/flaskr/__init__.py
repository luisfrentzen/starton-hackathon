import os
import pickle
import sklearn
import numpy as np
import flaskr.model as model
from flask import Flask, jsonify, request


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )
    # FILE_PATH = os.getcwd() + "/scripts/mnb_model_v5_c4_e250.pickle"
    # file = open(FILE_PATH, "rb")
    # model = pickle.load(file)
    
    labels = ['biotechnology', 'business_economics', 'chemical_engineering', 'computer_science', 'electrical_engineering', 'geography', 'hospitality_&_tourism', 'law_school', 'medical_school', 'visual_design']

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/hello', methods=['POST'])
    def hello():
        return jsonify(hello='World', name='Faker')

    @app.route('/predict', methods=['POST'])
    def predict():
        json = request.get_json()
        data = model.predict([json.get('essay')])[0].tolist()

        sortDescData = sorted(data)[::-1]
        topThreeData = sortDescData[:3]

        idxs = [data.index(topThreeData[0]), data.index(topThreeData[1]), data.index(topThreeData[2])]
        names = [labels[idxs[0]], labels[idxs[1]], labels[idxs[2]]]

        if abs(topThreeData[0] - topThreeData[1]) < 0.02 and abs(topThreeData[1] - topThreeData[2]) < 0.02:
            return jsonify(error = "Please tell us what you are interest in right now")

        if topThreeData[0] < 0.4:
            return jsonify(error = "Please tell us what you are interest in right now")

        return jsonify(probabilities=topThreeData, majors=names)

    return app