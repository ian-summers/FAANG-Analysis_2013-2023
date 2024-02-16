document.addEventListener('DOMContentLoaded', function(){
    fetch('./static/database_data.json')
    .then(response => response.json())
    .then(data => {
        var facebookData = data.meta;
        var spData = data.s_p_500; //
        
        var trace1 = {
            type: 'scatter',
            mode: 'lines',
            name: 'Facebook/Meta (META)',
            x: facebookData.map(d => d.date),
            y: facebookData.map(d => d.close),
            marker: {
                size: facebookData.map(d => Math.sqrt(d.volume) / 250),
                color: facebookData.map(d => d.volume),
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
            title: 'Facebook vs S&P 500 (Vanguard)',
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
