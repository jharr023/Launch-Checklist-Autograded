// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
        // Validate input
        let pilotValidation = validateInput(pilot);
        let copilotValidation = validateInput(copilot);
        let fuelLevelValidation = validateInput(fuelLevel);
        let cargoMassValidation = validateInput(cargoMass);
    
        // Accessing DOM elements
        let launchStatusElement = document.getElementById('launchStatus');
        let faultyItemsElement = document.getElementById('faultyItems');
        let pilotStatusElement = document.getElementById('pilotStatus');
        let copilotStatusElement = document.getElementById('copilotStatus');
        let fuelStatusElement = document.getElementById('fuelStatus');
        let cargoStatusElement = document.getElementById('cargoStatus');
    
        // Update shuttle requirements based on validation results
        if (
            pilotValidation === "Is a Number" ||
            copilotValidation === "Is a Number" ||
            fuelLevelValidation !== "Is a Number" ||
            cargoMassValidation !== "Is a Number"
        ) {
            // If any input is not valid
            launchStatusElement.textContent = "Awaiting Information Before Launch";
            launchStatusElement.style.color = "black";
            faultyItemsElement.style.visibility = "hidden";
            return;
        }
    
        // Update pilot and copilot status
        pilotStatusElement.textContent = `Pilot ${pilot} is ready for launch`;
        copilotStatusElement.textContent = `Co-pilot ${copilot} is ready for launch`;
    
        // Check fuel level
        if (fuelLevel < 10000) {
            fuelStatusElement.textContent = "Fuel level too low for launch";
            launchStatusElement.textContent = "Shuttle not ready for launch";
            launchStatusElement.style.color = "red";
            faultyItemsElement.style.visibility = "visible";
            return;
        }
    
        // Check cargo mass
        if (cargoMass > 10000) {
            cargoStatusElement.textContent = "Cargo mass too high for launch";
            launchStatusElement.textContent = "Shuttle not ready for launch";
            launchStatusElement.style.color = "red";
            faultyItemsElement.style.visibility = "visible";
            return;
        }
    
        // Shuttle is ready for launch
        launchStatusElement.textContent = "Shuttle is ready for launch";
        launchStatusElement.style.color = "green";
        faultyItemsElement.style.visibility = "hidden";
    }
} 
    module.exports.formSubmission = formSubmission;

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;