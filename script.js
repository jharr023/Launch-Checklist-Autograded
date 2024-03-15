const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;

    // Call myFetch() to fetch the list of planets
    let listedPlanetsResponse = myFetch();

    // Handle the returned promise
    listedPlanetsResponse.then(function(result) {
        // Store the fetched list of planets
        listedPlanets = result;
        console.log(listedPlanets);

        // Call the pickPlanet function to select a random planet
        const randomPlanet = pickPlanet(listedPlanets);

        // Display the mission target information within the HTML
        const missionTargetDiv = document.getElementById('missionTarget');
        missionTargetDiv.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${randomPlanet.name}</li>
                <li>Diameter: ${randomPlanet.diameter}</li>
                <li>Star: ${randomPlanet.star}</li>
                <li>Distance from Earth: ${randomPlanet.distance}</li>
                <li>Number of Moons: ${randomPlanet.moons}</li>
            </ol>
            <img src="${randomPlanet.image}">
        `;
    }).catch(function(error) {
        // Handle errors if myFetch() fails
        console.error('Error fetching data:', error);
    });
});