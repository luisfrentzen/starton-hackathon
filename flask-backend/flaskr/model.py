import sklearn
import pickle
import numpy as np
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
import os

stemmer = PorterStemmer()
stop_words = stopwords.words('english')
titles = ['biotechnology', 'business_economics', 'chemical_engineering', 'computer_science', 'electrical_engineering', 'geography', 'hospitality_&_tourism', 'law_school', 'medical_school', 'visual_design']

FILE_PATH = os.getcwd()

file = open(FILE_PATH+"/scripts/bernoulli_model_v1_c10_e230.pickle", "rb")
bernoulli = pickle.load(file)
file.close()
file = open(FILE_PATH+"/scripts/mnb_model_v1_c10_e230.pickle", "rb")
multinomial = pickle.load(file)
file.close()
file = open(FILE_PATH+"/scripts/logistic_model_v1_c10_e230.pickle", "rb")
logistic_regression = pickle.load(file)
file.close()

class VoteClassifier ():
    def __init__(self, *classifiers):
        self._classifiers = classifiers
    
    def classify(self, prep_data):
        votes = [0] * len(self._classifiers[0]['clf'].classes_)
        for c in self._classifiers:
            v = c.predict_proba(prep_data)
            votes += v
        votes/=3
        return votes

classifier = VoteClassifier(bernoulli,multinomial, logistic_regression)

def predict(text):
    data = [text[0]]
    prep_data = []

    for d in data:
        d = [stemmer.stem(dt).lower() for dt in d.split(' ')]
        d = [dt for dt in d if dt not in stop_words]
        prep_data.append(' '.join(d))

    return classifier.classify(prep_data)