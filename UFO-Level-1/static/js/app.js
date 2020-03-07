// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((UFO_Report) => {
  // Step 1: Loop Through `data` and Use d3 to append one table row `tr` for each weather report object

  var row = tbody.append("tr");
  // Step 2:  Use `Object.entries` to console.log each UFO report value

  Object.entries(UFO_Report).forEach(([key, value]) => {
    // Step 3: Use d3 to append 1 cell per UFO report value

    var cell = row.append("td");
    // Step 4: Use d3 to update each cell's text with

    cell.text(value);

  });

});


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  // Empty the table data before query
  d3.select("tbody").html("");

  filteredData.forEach((UFO_Report) => {
    // Step 1: Loop Through `data` and Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr");
    // Step 2:  Use `Object.entries` to console.log each UFO report value

    Object.entries(UFO_Report).forEach(([key, value]) => {
      // Step 3: Use d3 to append 1 cell per UFO report value

      var cell = row.append("td");
      // Step 4: Use d3 to update each cell's text with

      cell.text(value);

    });

  });

});

d3.select('form').on('submit', function () {
  d3.event.preventDefault() /* Stops it from refreshing page */

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  // Empty the table data before query
  d3.select("tbody").html("");

  filteredData.forEach((UFO_Report) => {
    // Step 1: Loop Through `data` and Use d3 to append one table row `tr` for each weather report object
    var row = tbody.append("tr");
    // Step 2:  Use `Object.entries` to console.log each UFO report value

    Object.entries(UFO_Report).forEach(([key, value]) => {
      // Step 3: Use d3 to append 1 cell per UFO report value

      var cell = row.append("td");
      // Step 4: Use d3 to update each cell's text with

      cell.text(value);

    });

  });
  
})