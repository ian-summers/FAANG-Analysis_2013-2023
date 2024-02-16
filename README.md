## Table of Contents
- [Introduction](#introduction)  
- [Theme](#theme)
- [Coding Approach](#coding-approach) 
- [Data Wrangling Techniques](#data-wrangling-techniques)
- [Final Visualization](#final-visualization)
- [Instructions for Using Visuals](#instructions-for-using-visuals)
- [Ethical Considerations](#ethical-considerations)

## Introduction
FAANG refers to the stocks of five major U.S. tech companies: Facebook/Meta, Apple, Amazon, Netflix and Google. First coined by CNBC host Jim Cramer in 2013, they are considered to be a [major indicator for investor's sentiment of the U.S. tech industry](https://www.investopedia.com/terms/f/faang-stocks.asp#:~:text=Key%20Takeaways%201%20FAANG%20is%20an%20acronym%20referring,the%20largest%20companies%20in%20the%20world.%20More%20items). Every FAANG company is traded on the NASDAQ, and as of January 2024 their [combined market cap is over $7 trillion, which is over 20% of the entire Standard & Poor's 500 Index](https://www.techopedia.com/definition/faang-stocks). Analyzing their performance is key to understanding investor trends in both the tech industry and the U.S. economy as a whole. 

## Theme
For this analysis, we wanted to tell the story of how FAANG performed over a 10 year period. We started in 2013, when their moniker was first used, through the end of 2023. This time period accounts for a diverse range of events and prevents any single time period from skewing the data. With the NASDAQ averaging 253 trading days per year, each stock has over 2,500 data points in our analysis. We visualized FAANG performance through 3 different interactive charts:
- A candlestick chart that shows the high, low, and closing price of the stock for each trading day. This chart allows for a comparison between the performance of each FAANG stock and their daily volatility or stability.
- Line charts comparing each FAANG stock to the S&P 500's performance over the same time period. The S&P 500 represents the top 500 companies by market capitalization on the New York Stock Exchange, and is [considered the "gold standard" stock index for stable investing](https://www.investing.com/academy/trading/what-is-the-sp-500/). These comparisons show when the stock, or the market, were better investments at different times.
- Scatterplot heatmaps that show the closing day value and volume of trades for a stock on a given day. These charts are frequently used in the investing and financial services industries to map the relationship betweeen a stock's value and its trading volume (how many times a stock was traded that day). 

## Coding Approach
We organized the codes to meet the imperative, functional, logical, and object-oriented paradigms. Coding languages used for this data collection for the analysis included Python to clean and organized the to level that we could work with in the form of data frames. PostgreSQL was used to convert the data frames into databases. Also, SQL Alchemy, HTML, JavaScript, as well as Flask were then used to manipulate the data. The data was transformed into JSON format and uploaded onto a website for visualization.

Codes were documented and demonstrated using Visual Studio Code, Jupyter notebook and Postgres. The Candlestick chart from Plotly was our new dictionary to use for the visualization. The base code for the [candlestick charts](https://plotly.com/python/candlestick-charts) and the [heatmaps](https://plotly.com/python/heatmaps/) came from Plotly. Color schemes were also pulled from [Plotly's official documentation](https://plotly.com/python/builtin-colorscales).

## Data Wrangling Techniques
To gather data for our project, we decided to pull an API from [Alpha Vantge](https://www.alphavantage.co/documentation/). The way the API call was set up, we were only able to pull 20 years worth of daily (open, high, low, close, volume) data. We pulled data for each stock in the "FAANG" group of stocks and the S&P 500 (Vanguard). From there we read all our data into a Pandas dataframe. By doing this we were able to filter the data to a timeframe that better suited our analysis needs. We also seperated our dataframe into several different dataframes in order to more easily load them into a PostgreSQL database as tables. Once the data was in a database, we then used SQLAlchemy to access our database and load it into JSON format.

## Final Visualization
The base HTML of the website came from a separate project I (Jesse) am working on my own free time. I merged the HTML with a basic .css file that styled all of the HTML pages in this project and made sure the charts took up the full screen when shown. 

For directing the flow of the webpage and its contents I used Flask and connected each path via the {{ url_for('definition_name')}} in HTML and @app.route() in the Python file. The .css, .js, and .json files are included in the ‘static’ folder while the .html files are in the ‘templates’ folder per the proper Flask flow procedure.  

Background image from open-source site [Unsplash](https://unsplash.com/)

## Instructions for Using Visuals
Hover over the data points within the chart to get the exact values for that date in your tooltip. For the candlestick chart, click and drag the rangefinder on the bottom to zoom in for a specific period of time. For the heatmap charts, click and drag over a time period to zoom in for the specific closing value and trade volume on that respective day.


## Ethical Considerations
We encountered an ethical consideration early on in this project during the data collection stage. Originally, we were going to use data from Financial Modeling Prep's stock market API. In their [Terms of Service](https://site.financialmodelingprep.com/terms-of-service), however, their free license disallowed their data to be displayed without express consent. We switched over to Alpha Advantage's API as a result, which did not have the same restriction. Alpha Advantage's terms of use can be found [here](https://www.alphavantage.co/support/#support). 
