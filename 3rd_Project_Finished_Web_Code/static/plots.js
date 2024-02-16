// Fetch the JSON data and console log it
fetch('./static/database_data.json')
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        
        // Extracting data for Amazon stock
        let amazonX = data.amazon.map(company => company.date);
        let amazonClose = data.amazon.map(company => company.close);
        let amazonOpen = data.amazon.map(company => company.open);
        let amazonHigh = data.amazon.map(company => company.high);
        let amazonLow = data.amazon.map(company => company.low);

        // Extracting data for Apple stock
        let appleX = data.aple.map(company => company.date);
        let appleClose = data.aple.map(company => company.close);
        let appleOpen = data.aple.map(company => company.open);
        let appleHigh = data.aple.map(company => company.high);
        let appleLow = data.aple.map(company => company.low);

        // Extracting data for Google stock
        let googleX = data.google.map(company => company.date);
        let googleClose = data.google.map(company => company.close);
        let googleOpen = data.google.map(company => company.open);
        let googleHigh = data.google.map(company => company.high);
        let googleLow = data.google.map(company => company.low);

        // Extracting data for Meta stock
        let metaX = data.meta.map(company => company.date);
        let metaClose = data.meta.map(company => company.close);
        let metaOpen = data.meta.map(company => company.open);
        let metaHigh = data.meta.map(company => company.high);
        let metaLow = data.meta.map(company => company.low);

        // Extracting data for Netflix stock
        let netflixX = data.netflix.map(company => company.date);
        let netflixClose = data.netflix.map(company => company.close);
        let netflixOpen = data.netflix.map(company => company.open);
        let netflixHigh = data.netflix.map(company => company.high);
        let netflixLow = data.netflix.map(company => company.low);

        // Extracting data for Voo stock
        let vooX = data.s_p_500.map(company => company.date);
        let vooClose = data.s_p_500.map(company => company.close); 
        let vooOpen = data.s_p_500.map(company => company.open);
        let vooHigh = data.s_p_500.map(company => company.high); 
        let vooLow = data.s_p_500.map(company => company.low);

        // Define colors for each company
        var colors = {
            amazon: 'red',
            apple: 'green',
            google: 'blue',
            meta: 'yellow',
            netflix: 'purple',
            voo: 'orange'
        };

        // Creating traces for each stock
        var amazonTrace = createTrace(amazonX, amazonClose, amazonOpen, amazonHigh, amazonLow, colors['amazon'], 'Amazon');
        var appleTrace = createTrace(appleX, appleClose, appleOpen, appleHigh, appleLow, colors['apple'], 'Apple');
        var googleTrace = createTrace(googleX, googleClose, googleOpen, googleHigh, googleLow, colors['google'], 'Google');
        var metaTrace = createTrace(metaX, metaClose, metaOpen, metaHigh, metaLow, colors['meta'], 'Meta');
        var netflixTrace = createTrace(netflixX, netflixClose, netflixOpen, netflixHigh, netflixLow, colors['netflix'], 'Netflix');
        var vooTrace = createTrace(vooX, vooClose, vooOpen, vooHigh, vooLow, colors['voo'], 'Voo');

        // Combine all traces into a single array
        var candlestickData = [amazonTrace, appleTrace, googleTrace, metaTrace, netflixTrace, vooTrace];

        // Define layout for the chart
        var layout = {
            dragmode: 'zoom', 
            margin: {
                r: 10, 
                t: 25, 
                b: 40, 
                l: 60
            }, 
            showlegend: true, 
            title: 'Stock Comparison',
            xaxis: {
                autorange: true, 
                domain: [0, 1], 
                range: ['2017-01-03 12:00', '2017-02-15 12:00'], 
                rangeslider: {range: ['2017-01-03 12:00', '2017-02-15 12:00']}, 
                title: 'Date', 
                type: 'date'
            }, 
            yaxis: {
                autorange: true, 
                domain: [0, 1], 
                range: [114.609999778, 137.410004222], 
                title: 'Price',
                type: 'linear'
            }
        };

        // Plot the chart
        Plotly.newPlot('myDiv', candlestickData, layout);  
    })
    .catch(error => console.error('Error loading the JSON data:', error));

// Function to create a trace for a stock
function createTrace(x, close, open, high, low, color, name) {
    return {
        x: x, 
        close: close, 
        open: open, 
        high: high, 
        low: low,
        decreasing: {line: {color: color}}, 
        increasing: {line: {color: color}},
        line: {color: color}, 
        type: 'candlestick', 
        xaxis: 'x', 
        yaxis: 'y',
        name: name
    };
}
