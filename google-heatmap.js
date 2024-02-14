document.addEventListener('DOMContentLoaded', function(){
    fetch('database_data.json')
    .then(response => response.json())
    .then(data => {
        var googleData = data.google;
        
        var trace = {
            type: 'scatter',
            mode: 'markers',
            x: googleData.map(d => d.date),
            y: googleData.map(d => d.close),
            marker: {
                size: googleData.map(d => d.volume / 10000),
                color: googleData.map(d => d.close),
                colorscale: 'Agsunset',
            }
        };

        var layout = {
            title: 'Google (GOOG) Stock Close Value vs Volume Over Time',
            plot_bgcolor: 'lightgray',
            paper_bgcolor: 'ivory',
            xaxis: { title: 'Date' },
            yaxis: { title: 'Close Value' },
        };

        Plotly.newPlot('myDiv', [trace], layout);
    })
    .catch(error => console.error('Error loading the JSON data:', error));
});
