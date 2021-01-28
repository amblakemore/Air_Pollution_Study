// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 25,
//   right: 25,
//   bottom: 25,
//   left: 25
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from hours-of-tv-watched.csv
// d3.csv("aqui_by_state_1995 (1).csv").then(function(stateData) {

//   // Print the tvData
//   console.log(stateData);

//   // Cast the hours value to a number for each piece of tvData
//   stateData.forEach(function(data) {
//     data.average_aqi = +data.average_aqi;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 1; // 10x scale on rect height

//  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (stateData.length - 1))) / stateData.length;

//    // @TODO
//   // Create code to build the bar chart using the tvData.
// chartGroup.selectAll(".bar")
//   .data(stateData)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", d => barWidth)
//   .attr("height", d => d.average_aqi * scaleY)
//   .attr("x", (d, i) => i * (barWidth + barSpacing))
//   .attr("y", d => chartHeight - d.average_aqi *scaleY);
// }).catch(function(error) {
//   console.log(error);

//   var layout = {
//     title: "AQI by State (1995)",
//     xaxis: { title: "States"},
//     yaxis: { title: "AQI"}
//   };
// });

// 2000
// // Define SVG area dimensions
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 150,
//   right: 150,
//   bottom: 150,
//   left: 150
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from hours-of-tv-watched.csv
// d3.csv("aqui_by_state_2000.csv").then(function(stateData) {

//   // Print the tvData
//   console.log(stateData);

//   // Cast the hours value to a number for each piece of tvData
//   stateData.forEach(function(data) {
//     data.average_aqi = +data.average_aqi;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 1; // 10x scale on rect height

//  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (stateData.length - 1))) / stateData.length;

//    // @TODO
//   // Create code to build the bar chart using the tvData.
// chartGroup.selectAll(".bar")
//   .data(stateData)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", d => barWidth)
//   .attr("height", d => d.average_aqi * scaleY)
//   .attr("x", (d, i) => i * (barWidth + barSpacing))
//   .attr("y", d => chartHeight - d.average_aqi *scaleY);
// }).catch(function(error) {
//   console.log(error);
// });

// 2005
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 150,
//   right: 150,
//   bottom: 150,
//   left: 150
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from hours-of-tv-watched.csv
// d3.csv("aqui_by_state_2005.csv").then(function(stateData) {

//   // Print the tvData
//   console.log(stateData);

//   // Cast the hours value to a number for each piece of tvData
//   stateData.forEach(function(data) {
//     data.average_aqi = +data.average_aqi;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 1; // 10x scale on rect height

//  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (stateData.length - 1))) / stateData.length;

//    // @TODO
//   // Create code to build the bar chart using the tvData.
// chartGroup.selectAll(".bar")
//   .data(stateData)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", d => barWidth)
//   .attr("height", d => d.average_aqi * scaleY)
//   .attr("x", (d, i) => i * (barWidth + barSpacing))
//   .attr("y", d => chartHeight - d.average_aqi *scaleY);
// }).catch(function(error) {
//   console.log(error);
// });

// 2010
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 150,
//   right: 150,
//   bottom: 150,
//   left: 150
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from hours-of-tv-watched.csv
// d3.csv("aqui_by_state_2010.csv").then(function(stateData) {

//   // Print the tvData
//   console.log(stateData);

//   // Cast the hours value to a number for each piece of tvData
//   stateData.forEach(function(data) {
//     data.average_aqi = +data.average_aqi;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 1; // 10x scale on rect height

//  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (stateData.length - 1))) / stateData.length;

//    // @TODO
//   // Create code to build the bar chart using the tvData.
// chartGroup.selectAll(".bar")
//   .data(stateData)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", d => barWidth)
//   .attr("height", d => d.average_aqi * scaleY)
//   .attr("x", (d, i) => i * (barWidth + barSpacing))
//   .attr("y", d => chartHeight - d.average_aqi *scaleY);
// }).catch(function(error) {
//   console.log(error);
// });

// 2015
// var svgWidth = 960;
// var svgHeight = 660;

// // Define the chart's margins as an object
// var chartMargin = {
//   top: 150,
//   right: 150,
//   bottom: 150,
//   left: 150
// };

// // Define dimensions of the chart area
// var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
// var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// // Select body, append SVG area to it, and set the dimensions
// var svg = d3
//   .select("body")
//   .append("svg")
//   .attr("height", svgHeight)
//   .attr("width", svgWidth);

// // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// // to the margins set in the "chartMargin" object.
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// // Load data from hours-of-tv-watched.csv
// d3.csv("aqui_by_state_2015.csv").then(function(stateData) {

//   // Print the tvData
//   console.log(stateData);

//   // Cast the hours value to a number for each piece of tvData
//   stateData.forEach(function(data) {
//     data.average_aqi = +data.average_aqi;
//   });

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 1; // 10x scale on rect height

//  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (stateData.length - 1))) / stateData.length;

//    // @TODO
//   // Create code to build the bar chart using the tvData.
// chartGroup.selectAll(".bar")
//   .data(stateData)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", d => barWidth)
//   .attr("height", d => d.average_aqi * scaleY)
//   .attr("x", (d, i) => i * (barWidth + barSpacing))
//   .attr("y", d => chartHeight - d.average_aqi *scaleY);
// }).catch(function(error) {
//   console.log(error);
// });

// 2020
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 150,
  right: 150,
  bottom: 150,
  left: 150
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("aqui_by_state_2020.csv").then(function(stateData) {

  // Print the tvData
  console.log(stateData);

  // Cast the hours value to a number for each piece of tvData
  stateData.forEach(function(data) {
    data.average_aqi = +data.average_aqi;
  });

  var barSpacing = 10; // desired space between each bar
  var scaleY = 1; // 10x scale on rect height

 // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (stateData.length - 1))) / stateData.length;

   // @TODO
  // Create code to build the bar chart using the tvData.
chartGroup.selectAll(".bar")
  .data(stateData)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", d => barWidth)
  .attr("height", d => d.average_aqi * scaleY)
  .attr("x", (d, i) => i * (barWidth + barSpacing))
  .attr("y", d => chartHeight - d.average_aqi *scaleY);
}).catch(function(error) {
  console.log(error);
});