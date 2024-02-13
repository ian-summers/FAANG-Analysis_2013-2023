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

@app.route('/facebook')
def facebook():
    return render_template('facebook.html')

@app.route('/amazon')
def amazon():
    return render_template('amazon.html')

@app.route('/apple')
def apple():
    return render_template('apple.html')

@app.route('/netflix')
def netflix():
    return render_template('netflix.html')

@app.route('/google')
def google():
    return render_template('google.html')

@app.route('/heatmap')
def heatmap():
    return render_template('heatmap.html')

@app.route('/SP500')
def SP500():
    return render_template('SP500.html')

if __name__ == '__main__':
    app.run(debug=True) # Remember to switch this to false before deploying the website