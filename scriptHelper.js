//const { planetsResponse } = require('C:/Users/kaise/OneDrive/Desktop/LaunchCode/Launch Checklist/Launch-Checklist-Autograded/__tests__/grading.test.js');
// Write your helper functions here!
import ('cross-fetch/polyfill');
//import ('https://cdn.jsdelivr.net/npm/cross-fetch@latest/dist/browser-polyfill.min.js');

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

function validateInput(input) {
    // Convert input to string if it's not already a string
    if (typeof input !== 'string') {
        input = String(input);
    }
    // Trim input to remove leading and trailing whitespace
    input = input.trim();
    // Check if input is empty
    if (input === "") {
        return "Empty"; // Input is empty
    } 
    // Check if input is not a number
    if (!isNaN(input)) {
        return "Is a Number"; // Input is a valid number
    } 
    // Input is a valid string
    return "Not a Number";
}

//REMOVING LIST = CORRECT WEBPAGE, KEEPING LIST = 2/10 fail (IDK why)
function formSubmission(document, /*list,*/ pilot, copilot, fuelLevel, cargoMass) {
    console.log("Received input data:");
    console.log("Pilot:", pilot);
    console.log("Co-pilot:", copilot);
    console.log("Fuel Level:", fuelLevel);
    console.log("Cargo Mass:", cargoMass);

    // Validate input data for pilot, co-pilot, fuel, and cargo
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(String(fuelLevel));
    let cargoStatus = validateInput(String(cargoMass));

    console.log("Validation statuses:");
    console.log("Pilot Status:", pilotStatus);
    console.log("Co-pilot Status:", copilotStatus);
    console.log("Fuel Status:", fuelStatus);
    console.log("Cargo Status:", cargoStatus);

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

    // All inputs are valid
    // Update pilot and co-pilot status
    document.getElementById('pilotStatus').textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById('copilotStatus').textContent = `Co-pilot ${copilot} is ready for launch`;

    // Check fuel level
    if (isNaN(fuelLevel) || fuelLevel < 0) {
        // Shuttle not ready for launch due to invalid fuel level
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        document.getElementById('fuelStatus').textContent = "Fuel level must be a valid positive number.";
        alert("Fuel level must be a valid positive number!");
        
    } else if (fuelLevel < 10000) {
        // Shuttle not ready for launch due to low fuel
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        document.getElementById('fuelStatus').textContent = "Fuel level too low for launch";
        alert("Fuel level must be above 10000.");
    } else {
        // Fuel level is sufficient for launch
        document.getElementById('fuelStatus').textContent = "Fuel level high enough for launch";
    }

    // Check cargo mass
    if (isNaN(cargoMass) || cargoMass < 0) {
        // Shuttle not ready for launch due to invalid cargo mass
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        document.getElementById('cargoStatus').textContent = "Cargo mass must be a valid positive number.";
        alert("Cargo mass must be valid positive number.");
    
    } else if (cargoMass > 10000) {
        // Shuttle not ready for launch due to heavy cargo
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        document.getElementById('cargoStatus').textContent = "Cargo mass too heavy for launch";
        alert("Cargo mass must be under 10000.");
    } else {
        // Cargo mass is within acceptable limits
        document.getElementById('cargoStatus').textContent = "Cargo mass low enough for launch";
    }

    // Set the color to green if the shuttle is ready for launch
    if (launchStatus.textContent !== "Shuttle Not Ready for Launch") {
        launchStatus.style.color = "green";
        launchStatus.textContent = "Shuttle is Ready for Launch";
    }
    //launchStatus.textContent = "Shuttle is Ready for Launch";
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
 //window.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 //window.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 //window.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 //window.pickPlanet = pickPlanet;
 module.exports.myFetch = myFetch;
 //window.myFetch = myFetch;