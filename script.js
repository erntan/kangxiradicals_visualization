const numRadicals = 214;    
const maxStroke = 17;
const minRowSize = 6;
const maxRowSize = 16;

var radTable = document.getElementById("radicals-table");
var buttonArea = document.getElementById("buttons");
const buttonChart = document.getElementById("button-chart");
const buttonHistStroke = document.getElementById("button-histogram-stroke");
const buttonHistFreq = document.getElementById("button-histogram-frequency");
const buttonChunk = document.getElementById("button-chunk");

// var tableType = chart;

/* Get the json file. */
let requestURL = "https://raw.githubusercontent.com/erntan/kangxiradicals_visualization/master/data.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const charactersJSON = request.response;
  const radsJSON = charactersJSON["radicals"];
  createRadicalsTable(radsJSON);
  // createStrokeHistogram(radsJSON);
}

/* Create divs for the number of strokes */
function createStrokeDivs() {
  for (let i = 1; i <= maxStroke; i++) {
    const strokeDiv = document.createElement("div");
    strokeDiv.className = "stroke-div";
    strokeDiv.id = "stroke-div-" + i;
    radTable.appendChild(strokeDiv);
  }
}

/* Create and populate the radicals table. */
function createRadicalsTable(obj) {
  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
    const currentRad = obj[i];

    radDiv.className = "rad-div";
    radDiv.classList.add("rad-stroke-" + currentRad.strokeCount);
    radDiv.textContent = currentRad.character;

    radTable.appendChild(radDiv);
  }
}

function createStrokeHistogram(obj) {
  createStrokeDivs();
  let i = 1;
  // while (i <= maxStroke && )
  for (let i = 0; i < numRadicals; i++) {
    const radDiv = document.createElement("div");
  }
}


/** Add event listeners */
// buttonHistFreq.addEventListener("click", createStrokeHistogram());