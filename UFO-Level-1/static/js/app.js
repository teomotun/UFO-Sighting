// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each weather report object
// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Step 3:  Use `Object.entries` to console.log each weather report value
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// Step 5: Use d3 to update each cell's text with
tableData.forEach((UFO_Report) => {
  var row = tbody.append("tr");
  Object.entries(UFO_Report).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});