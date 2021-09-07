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

    labels = ['biotechnology', 'business_economics', 'chemical_engineering', 'computer_science',
              'electrical_engineering', 'geography', 'hospitality_&_tourism', 'law_school', 'medical_school', 'visual_design']

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/predict', methods=['POST'])
    def predict():
        json = request.get_json()
        data = model.predict([json.get('essay')])[0].tolist()

        sortDescData = sorted(data)[::-1]

        idxs = [data.index(sdd) for sdd in sortDescData]
        names = [labels[i] for i in idxs]

        return jsonify(probabilities=sortDescData, majors=names)

    return app
