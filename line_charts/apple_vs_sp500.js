document.addEventListener('DOMContentLoaded', function(){
    fetch('database_data.json')
    .then(response => response.json())
    .then(data => {
        var aaplData = data.aple;
        var spData = data.s_p_500; //
        
        var trace1 = {
            type: 'scatter',
            mode: 'lines',
            name: 'AAPL',
            x: aaplData.map(d => d.date),
            y: aaplData.map(d => d.close),
            marker: {
                size: aaplData.map(d => Math.sqrt(d.volume) / 250),
                color: aaplData.map(d => d.volume),
                colorscale: 'Blues',
                showscale: true
            }
        };

        var trace2 = {
            type: 'scatter',
            mode: 'lines',
            name: 'VOO -S&P 500 (Vanguard)',
            x: spData.map(d => d.date),
            y: spData.map(d => d.close),
            marker: {
                size: spData.map(d => Math.sqrt(d.volume) / 250),
                color: spData.map(d => d.volume),
                colorscale: 'Reds',
                showscale: true
            }
        };

        var layout = {
            title: 'Apple vs. S&P 500',
            plot_bgcolor: 'ivory',
            paper_bgcolor: 'ivory',
            xaxis: { title: 'Date' },
            yaxis: { 
                title: 'Close Value',
                range: [0, 'auto'],
                rangemode: 'nonnegative'
            }
        };

        Plotly.newPlot('myDiv', [trace1, trace2], layout);
    })
    .catch(error => console.error('Error loading the JSON data:', error));
});
