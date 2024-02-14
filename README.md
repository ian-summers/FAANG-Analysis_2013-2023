## Table of Contents
- [Introduction](#introduction)  
- [Theme](#theme)
- [Coding Approach](#coding-approach) 
- [Data Wrangling Techniques](#data-wrangling-techniques)
- [Final Visualization](#final-visualization) 
- [Ethical Considerations](#ethical-considerations)

## Introduction
FAANG refers to the stocks of five major U.S. tech companies: Facebok/Meta, Apple, Amazon, Netflix and Google. First coined by CNBC host Jim Cramer in 2013, they are considered to be a [major indicator for investor's sentiment of the U.S. tech industry](https://www.investopedia.com/terms/f/faang-stocks.asp#:~:text=Key%20Takeaways%201%20FAANG%20is%20an%20acronym%20referring,the%20largest%20companies%20in%20the%20world.%20More%20items). Every FAANG company is traded on the NASDAQ, and as of January 2024 their [combined market cap is over $7 trillion, which is over 20% of the entire Standard & Poor's 500 Index](https://www.techopedia.com/definition/faang-stocks). Analyzing their performance is key to understanding investor trends in both the tech industry and the U.S. economy as a whole. 

## Theme
For this analysis, we wanted to tell the story of how FAANG performed over a 10 year period. We started in 2013, when their moniker was first used, through the end of 2023. This time period accounts for a diverse range of events and prevents any single time period from skewing the data. With the NASDAQ averaging 253 trading days per year, each stock has over 2,500 data points in our analysis. We visualized FAANG performance through 3 different interactive charts:
- A candlestick chart that shows the high, low, and closing price of the stock for each trading day. This chart allows for a comparison between the performance of each FAANG stock and their daily volatility or stability.
- Line charts comparing each FAANG stock to the S&P 500's performance over the same time period. The S&P 500 represents the top 500 companies by market capitalization on the New York Stock Exchange, and is [considered the "gold standard" stock index for stable investing](https://www.investing.com/academy/trading/what-is-the-sp-500/). These comparisons show when the stock, or the market, were better investments at different times.
- Scatterplot heatmaps that show the closing day value and volume of trades for a stock on a given day. These charts are frequently used in the investing and financial services industries to map the relationship betweeen a stock's value and its trading volume (how many times a stock was traded that day). 

## Coding Approach
(Lay out the different technologies used in this project and how we pulled the data)

## Data Wrangling Techniques
(Explainer on how the data was turned into a database, and then exported a json for the charting)

## Final Visualization
(insert language about the website and the flask functions). 

Background image from open-source site [Unsplash](https://unsplash.com/)

The base code for the [candlestick charts](https://plotly.com/python/candlestick-charts) and the [heatmaps]https://plotly.com/python/heatmaps/ came from Plotly.Color schemes were also pulled from [Plotly's official documentation](https://plotly.com/python/builtin-colorscales).

## Ethical Considerations
We encountered an ethical consideration early on in this project during the data collection stage. Originally, we were going to use data from Financial Modeling Prep's stock market API. In their [Terms of Service](https://site.financialmodelingprep.com/terms-of-service), however, their free license disallowed their data to be displayed without express consent. We switched over to Alpha Advantage's API as a result, which did not have the s ame restriction. 