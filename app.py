import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect

from flask import Flask, jsonify , render_template
import datetime as dt
from sqlalchemy import cast

# JoshBrar 01/21/2021 -  Begin

# Setup for the Project 2 database

connection_string = "postgres:Password@localhost:5432/Project2"
engine = create_engine(f'postgresql://{connection_string}')

# JoshBrar 01/21/2021 -  End


 #automap base to reflect database in a model
Base = automap_base()

# fetch tables 
Base.prepare(engine, reflect=True)

# Save reference to the table
overall_aqi = Base.classes.overall_aqi

app = Flask(__name__)


@app.route("/")
def home():
    # List all available API Routes.
    return"""<html>
    <h1 align =Left> Air Pollution - Project 2</h1>

    <br><br><br>
    <ul>
   
    <li>
    Returns all data from  overall_aqi:
       <a href="/api/v1.0/all_overall_aqi">/api/v1.0/All Overall_aqi</a>
    </li>
    <br><br><br><br>
   <li>
    Return a JSON list of aqi for a given year.
    <br>
    <a href="/api/v1.0/<state_name>/<year>">/api/v1.0/State Name and year</a>
    </li>
    <br>
     <li>
    Return a JSON list of aqi for a California County.
    <br>
    <a href="/api/v1.0/cacounty/<year>">Ca County and year</a>
    </li>
    <br>
    <li>
    <a href="/api/v1.0/years/<year>">/api/v1.0/Years</a>
    </li>
    <br>
    <br><br><br>
    <br>
    </ul>

    </html>
    """


@app.route("/test")
def test():
    return render_template("AirPollutionWebsite_1.html")


#Return a JSON list of all overall_aqi from the dataset.
@app.route("/api/v1.0/all_overall_aqi")
def stations(): 
    # Docstring
    """Return a JSON list of stations from the dataset."""
    session = Session(engine)

    # Query stations

    overall_aqi_query = session.query(overall_aqi.id,overall_aqi.state_name,overall_aqi.county_name,overall_aqi.years,overall_aqi.aqi).all()

    # Convert list of tuples into normal list
    overall_aqi_query_dict = list(np.ravel(overall_aqi_query))
    session.close()

    return jsonify(overall_aqi_query_dict)


#Return a JSON list of all overall_aqi from the dataset for a State.
@app.route("/api/v1.0/<state_name>/<year>")

def getstate(state_name=None, year=None):

    session = Session(engine)
    get_state_name = state_name
    get_year   = year

    aqi_state_name_query = session.query(overall_aqi.county_name, func.cast(func.round(func.avg(overall_aqi.aqi),2),sqlalchemy.String)).group_by(overall_aqi.county_name).filter(overall_aqi.state_name == get_state_name).filter(overall_aqi.years == get_year).all()

    
    # Convert list of tuples into normal list
    aqi_state_name_query_dict = list(np.ravel(aqi_state_name_query))
 
    session.close()
  
    return jsonify(aqi_state_name_query_dict)


# Average AQI in California by county , Input Year

@app.route("/api/v1.0/cacounty/<year>")
def getcastate(year=None):
    session = Session(engine)
    get_year =year 

    aqi_county_query = session.query(overall_aqi.county_name, func.cast(func.round(func.avg(overall_aqi.aqi),2),sqlalchemy.String)).group_by(overall_aqi.county_name).filter(overall_aqi.state_name == 'California').filter(overall_aqi.years == get_year).all()

    aqi_county_query_dict = list(np.ravel(aqi_county_query))
    session.close()

    return jsonify(aqi_county_query_dict)


# Average AQI in States , Input Year

@app.route("/api/v1.0/years/<years>")

def getyears(years=None):
    session = Session(engine)
    get_years =years
    aqi_years_query = session.query(overall_aqi.state_name, func.cast(func.round(func.avg(overall_aqi.aqi),2),sqlalchemy.String)).group_by(overall_aqi.state_name).filter(overall_aqi.years == get_years).all()
    aqi_years_query_dict = list(np.ravel(aqi_years_query))
    session.close()
    return jsonify(aqi_years_query_dict)


if __name__ == "__main__":
    app.run(debug=True)

