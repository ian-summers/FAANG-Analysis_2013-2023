

// Fetch the JSON data and console log it
d3.json('database_data.json').then(function(data) {
  console.log(data);
  
  let x = data.amazon.map(company => company.date)
  let close = data.amazon.map(company => company.close)
  let open = data.amazon.map(company => company.open)
  let high = data.amazon.map(company => company.high)
  let low = data.amazon.map(company => company.low)

  // Define colors for each company
var colors = {
  amazon: 'red',
  aple: 'green',
  netflix: 'blue',
  google: 'yellow',
  meta: 'purple',
  s_p_500: 'orange'

  
};

  var amazon = {
    x:x, close:close, open:open, high:high, low:low,
  

  decreasing: {line: {color: colors['amazon']}}, 
  increasing: {line: {color: colors['amazon']}},
  line: {color: colors['amazon']}, 

 
  
  type: 'candlestick', 
  xaxis: 'x', 
  yaxis: 'y',
  name: 'Amazon'
};

x = data.aple.map(company => company.date)
close = data.aple.map(company => company.close)
open = data.aple.map(company => company.open)
high = data.aple.map(company => company.high)
low = data.aple.map(company => company.low)

var aple = {
  x:x, close:close, open:open, high:high, low:low,

decreasing: {line: {color: colors['aple']}}, 
increasing: {line: {color: colors['aple']}},
line: {color: colors['aple']}, 

type: 'candlestick', 
xaxis: 'x', 
yaxis: 'y',
name: 'Aple'
};

x = data.netflix.map(company => company.date)
close = data.netflix.map(company => company.close)
open = data.netflix.map(company => company.open)
high = data.netflix.map(company => company.high)
low = data.netflix.map(company => company.low)

var netflix = {
  x:x, close:close, open:open, high:high, low:low,

decreasing: {line: {color: colors['netflix']}}, 
increasing: {line: {color: colors['netflix']}},
line: {color: colors['netflix']}, 

type: 'candlestick', 
xaxis: 'x', 
yaxis: 'y',
name: 'Netflix'
};

x = data.google.map(company => company.date)
close = data.google.map(company => company.close)
open = data.google.map(company => company.open)
high = data.google.map(company => company.high)
low = data.google.map(company => company.low)

var google = {
  x:x, close:close, open:open, high:high, low:low,
 

decreasing: {line: {color: colors['google']}}, 
increasing: {line: {color: colors['google']}},
line: {color: colors['google']}, 

type: 'candlestick', 
xaxis: 'x', 
yaxis: 'y',
name: 'Google'
};

x = data.meta.map(company => company.date)
close = data.meta.map(company => company.close)
open = data.meta.map(company => company.open)
high = data.meta.map(company => company.high)
low = data.meta.map(company => company.low)

var meta = {
  x:x, close:close, open:open, high:high, low:low,


decreasing: {line: {color: colors['meta']}}, 
increasing: {line: {color: colors['meta']}},
line: {color: colors['meta']}, 

type: 'candlestick', 
xaxis: 'x', 
yaxis: 'y',
name: 'Meta'
};

x = data.s_p_500.map(company => company.date)
close = data.s_p_500.map(company => company.close)
open = data.s_p_500.map(company => company.open)
high = data.s_p_500.map(company => company.high)
low = data.s_p_500.map(company => company.low)

var s_p_500 = {
  x:x, close:close, open:open, high:high, low:low,



decreasing: {line: {color: colors['s_p_500']}}, 
increasing: {line: {color: colors['s_p_500']}},
line: {color: colors['s_p_500']}, 
type: 'candlestick', 
xaxis: 'x', 
yaxis: 'y',
name: 'S_P_500'
};


var data = [amazon, aple, netflix, google, meta, s_p_500];

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

Plotly.newPlot('myDiv1', data, layout);  

});


   


