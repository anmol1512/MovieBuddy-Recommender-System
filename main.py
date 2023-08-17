from flask import Flask,render_template,request,url_for
import pandas as pd

def get_movie_names():
    movies_df=pd.read_csv('./2018_movies.csv')
    return list(movies_df['Title'].str.capitalize())

app=Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    movie_names=get_movie_names()
    return render_template('index.html',movie_names=movie_names)

if __name__=='__main__':
    app.run(debug=True)
