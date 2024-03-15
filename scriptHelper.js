const { planetsResponse } = require('C:/Users/kaise/OneDrive/Desktop/LaunchCode/Launch Checklist/Launch-Checklist-Autograded/__tests__/grading.test.js');
// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById('missionTarget');
    missionTargetDiv.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}

/* function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById('missionTarget');
    missionTargetDiv.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
} */
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

/*
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Validate input data for pilot, co-pilot, fuel, and cargo
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoLevel);
    
    // Get the launch status and faulty items elements
    let launchStatus = document.getElementById('launchStatus');
    let faultyItems = document.getElementById('faultyItems');

    // Set visibility of faulty items to "visible"
    faultyItems.style.visibility = "visible";

    // Check if any required fields are empty
    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
        alert("All fields are required!");
        return;
    }

    // Check if all inputs are valid
    if (pilotStatus !== "Is a Number" && copilotStatus !== "Is a Number" && fuelStatus !== "Not a Number" && cargoStatus !== "Not a Number") {
        // All inputs are valid

        // Update pilot and co-pilot status
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot} is ready for launch`;

        // Check fuel and cargo levels
        if (fuelLevel < 10000 || cargoLevel > 10000) {
            // Shuttle not ready for launch
            launchStatus.textContent = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

            // Update fuel status
            if (fuelLevel < 10000) {
                document.getElementById('fuelStatus').textContent = "Fuel level too low for launch";
            } else {
                document.getElementById('fuelStatus').textContent = "Fuel level high enough for launch";
            }

            // Update cargo status
            if (cargoLevel > 10000) {
                document.getElementById('cargoStatus').textContent = "Cargo mass too heavy for launch";
            } else {
                document.getElementById('cargoStatus').textContent = "Cargo mass low enough for launch";
            }
        } else {
            // Shuttle is ready for launch
            launchStatus.textContent = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";

            // Update fuel and cargo status
            document.getElementById('fuelStatus').textContent = "Fuel level high enough for launch";
            document.getElementById('cargoStatus').textContent = "Cargo mass low enough for launch";
        }
    } else {
        // Invalid input detected
        console.log("Invalid input detected!");
        if (pilotStatus === "Is a Number") {
            console.log("Pilot name cannot be a number.");
        }
        if (copilotStatus === "Is a Number") {
            console.log("Co-pilot name cannot be a number.");
        }
        if (fuelStatus === "Not a Number") {
            console.log("Fuel level must be a number.");
        }
        if (cargoStatus === "Not a Number") {
            console.log("Cargo mass must be a number.");
        }
    }
}
*/

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Validate input data for pilot, co-pilot, fuel, and cargo
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoLevel);
    
    // Get the launch status and faulty items elements
    let launchStatus = document.getElementById('launchStatus');
    let faultyItems = document.getElementById('faultyItems');

    // Set visibility of faulty items to "visible"
    faultyItems.style.visibility = "visible";

    // Check if any required fields are empty
    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
        alert("All fields are required!");
        return;
    }

    // Check if all inputs are valid
    if (pilotStatus !== "Is a Number" && copilotStatus !== "Is a Number" && fuelStatus !== "Not a Number" && cargoStatus !== "Not a Number") {
        // All inputs are valid

        // Update pilot and co-pilot status
        document.getElementById('pilotStatus').textContent = `Pilot ${pilot} is ready for launch`;
        document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot} is ready for launch`;

        // Check fuel and cargo levels
        if (fuelLevel < 10000 || cargoLevel > 10000) {
            // Shuttle not ready for launch
            launchStatus.textContent = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";

            // Update fuel status
            if (fuelLevel < 10000) {
                document.getElementById('fuelStatus').textContent = "Fuel level too low for launch";
            } else {
                document.getElementById('fuelStatus').textContent = "Fuel level high enough for launch";
            }

            // Update cargo status
            if (cargoLevel > 10000) {
                document.getElementById('cargoStatus').textContent = "Cargo mass too heavy for launch";
            } else {
                document.getElementById('cargoStatus').textContent = "Cargo mass low enough for launch";
            }
        } else {
            // Shuttle is ready for launch
            launchStatus.textContent = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";

            // Update fuel and cargo status
            document.getElementById('fuelStatus').textContent = "Fuel level high enough for launch";
            document.getElementById('cargoStatus').textContent = "Cargo mass low enough for launch";
        }
    } else {
        // Invalid input detected
        document.getElementById('launchStatus').textContent = "Awaiting Information Before Launch";
        launchStatus.style.color = "black"; // Reset color
        console.log("Invalid input detected!");
        if (pilotStatus === "Is a Number") {
            document.getElementById('pilotStatus').textContent = "Pilot name cannot be a number.";
        }
        if (copilotStatus === "Is a Number") {
            document.getElementById('copilotStatus').textContent = "Co-pilot name cannot be a number.";
        }
        if (fuelStatus === "Not a Number") {
            document.getElementById('fuelStatus').textContent = "Fuel level must be a number.";
        }
        if (cargoStatus === "Not a Number") {
            document.getElementById('cargoStatus').textContent = "Cargo mass must be a number.";
        }
    }
}

async function myFetch() {
    try {
        // Fetch the list of planets from the API or any source
        const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
        const data = await response.json();
        
        return data; // Return the fetched list of planets
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;