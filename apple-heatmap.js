document.addEventListener('DOMContentLoaded', function(){
    fetch('database_data.json')
    .then(response => response.json())
    .then(data => {
        var appleData = data.aple;
        
        var trace = {
            type: 'scatter',
            mode: 'markers',
            x: appleData.map(d => d.date),
            y: appleData.map(d => d.close),
            marker: {
                size: appleData.map(d => Math.sqrt(d.volume) / 250), // Adjust marker size for better visibility
                color: appleData.map(d => d.volume),
                colorscale: 'Greys',
                showscale: true // Show color scale to interpret volume
            }
        };

        var layout = {
            title: 'Apple (AAPL) Closing Day Value vs Volume Over Time',
            plot_bgcolor: 'ivory',
            paper_bgcolor: 'ivory',
            xaxis: { title: 'Date' },
            yaxis: { 
                title: 'Close Value' },
                range: [0, 'auto'],
                rangemode: 'nonnegative' 
        };

        Plotly.newPlot('myDiv', [trace], layout);
    })
    .catch(error => console.error('Error loading the JSON data:', error));
});
