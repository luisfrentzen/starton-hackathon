import os
import pickle
import sklearn
import numpy as np
from flask import Flask, jsonify, request


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )
    FILE_PATH = os.getcwd() + "/scripts/mnb_model_v5_c4_e250.pickle"
    file = open(FILE_PATH, "rb")
    model = pickle.load(file)
    labels = ['Business and Economic', 'Chemical Engineering', 'Computer Science', 'Visual Design']

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
        data = model.predict_proba([json.get('essay')])[0].tolist()

        sortDescData = sorted(data)[::-1]
        topThreeData = sortDescData[:3]

        idxs = [data.index(topThreeData[0]), data.index(topThreeData[1]), data.index(topThreeData[2])]
        names = [labels[idxs[0]], labels[idxs[1]], labels[idxs[2]]]

        return jsonify(probabilities=topThreeData, majors=names)

    return app