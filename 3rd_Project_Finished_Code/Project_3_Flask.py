import matplotlib
matplotlib.use('Agg')
import io
import matplotlib.pyplot as plt  
import plotly.graph_objs as go
import base64  
from flask import Flask, render_template, request
 
app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/FAANG')
def FAANG():
    return render_template('FAANG.html')

@app.route('/facebook_heatmap')
def facebook_heatmap():
    return render_template('facebook_heatmap.html')

@app.route('/amazon')
def amazon():
    return render_template('amazon.html')

@app.route('/amazon_heatmap')
def amazon_heatmap():
    return render_template('amazon_heatmap.html')

@app.route('/apple')
def apple():
    return render_template('apple.html')

@app.route('/apple_heatmap')
def apple_heatmap():
    return render_template('apple_heatmap.html')

@app.route('/netflix')
def netflix():
    return render_template('netflix.html')

@app.route('/netflix_heatmap')
def netflix_heatmap():
    return render_template('netflix_heatmap.html')

@app.route('/google')
def google():
    return render_template('google.html')

@app.route('/google_heatmap')
def google_heatmap():
    return render_template('google_heatmap.html')

@app.route('/meta')
def meta():
    return render_template('meta.html')

if __name__ == '__main__':
    app.run(debug=False) # Remember to switch this to false before deploying the website
