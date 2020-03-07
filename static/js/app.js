// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Initializes the page with a default plot
function init() {
  
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
  
  // Call click button function
  clickButton("datetime");
};


function clickButton(term) {
  
  button.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#term");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    if (term == 'datetime') {
      var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    }

    else if (term == 'city') {
      var filteredData = tableData.filter(tableData => tableData.city === inputValue);
    }

    else if (term == 'state') {
      var filteredData = tableData.filter(tableData => tableData.state === inputValue);
    }

    else if (term == 'country') {
      var filteredData = tableData.filter(tableData => tableData.country === inputValue);
    }

    else if (term == 'shape') {
      var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
    }

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

}
  

// On change to the DOM, call getData()
d3.selectAll("#selFilterQuery").on("change", getData);

// Function called by DOM changes
function getData() {
  
  var dropdownMenu = d3.select("#selFilterQuery");
  // Assign the value of the dropdown menu option to a variable
  var term = dropdownMenu.property("value");

  clickButton(term);

};

// Change the search description once the dropdown is clicked
const areaSelect = document.querySelector(`[id="selFilterQuery"]`);

areaSelect.addEventListener(`change`, (e) => {
  // log(`e.target`, e.target);
  const select = e.target;

  const value = select.value;

  const text = select.selectedOptions[0].text;
  
  d3.select("#SearchTerm").text("Enter a " + text);

  // Change the placeholder according to dropdown option
  if (text == 'Date') {
    document.getElementById("term").placeholder = "1/10/2010";
  }

  else if (text == 'City') {
    document.getElementById("term").placeholder = "cary";
  }

  else if (text == 'State') {
    document.getElementById("term").placeholder = "nc";
  }

  else if (text == 'Country') {
    document.getElementById("term").placeholder = "us";
  }

  else if (text == 'Shape') {
    document.getElementById("term").placeholder = "circle";
  }
  
});

init();



