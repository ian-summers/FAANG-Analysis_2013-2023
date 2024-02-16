document.addEventListener('DOMContentLoaded', function(){
    fetch('./static/database_data.json')
    .then(response => response.json())
    .then(data => {
        var netflixData = data.netflix;
        
        var trace = {
            type: 'scatter',
            mode: 'markers',
            x: netflixData.map(d => d.date),
            y: netflixData.map(d => d.close),
            marker: {
                size: netflixData.map(d => Math.sqrt(d.volume) / 250), // Adjust marker size for better visibility
                color: netflixData.map(d => d.volume),
                colorscale: 'Reds',
                showscale: true // Show color scale to interpret volume
            }
        };

        var layout = {
            title: 'Netflix (NFLX) Closing Day Value vs Volume Over Time',
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
