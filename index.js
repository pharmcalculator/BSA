function updateUnits() {
  const system = document.getElementById("system").value;
  const weightUnitElement = document.getElementById("weight-unit");
  const heightUnitElement = document.getElementById("height-unit");

  if (system === "metric") {
    weightUnitElement.innerHTML = " kg";
    heightUnitElement.innerHTML = " cm";
  } else if (system === "imperial") {
    weightUnitElement.innerHTML = " lb";
    heightUnitElement.innerHTML = " in";
  }
}

function calculateBSA() {
  const system = document.getElementById("system").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid numeric values.");
    return;
  }

  let bsa;

  if (system === "metric") {
    bsa = Math.sqrt(weight * height / 3600);
  } else if (system === "imperial") {
    bsa = Math.sqrt(weight * height / 3131);
  }

  const roundedBSA = bsa.toFixed(2);

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "<strong>Body Surface Area: " + roundedBSA + " m<sup>2</sup></strong>";
}

// Set default units
updateUnits();