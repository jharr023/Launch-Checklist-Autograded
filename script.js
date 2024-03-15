// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

function myFetch() {
    return Promise.resolve(planetsResponse);
}

window.addEventListener("load", function() {
    // Define variables to store the fetched planets and the selected planet
    let listedPlanets;
    let selectedPlanet;

    // Call myFetch() to fetch the list of planets
    myFetch().then(function (result) {
        listedPlanets = result;

        // Use pickPlanet() to select a random planet from the list
        selectedPlanet = pickPlanet(listedPlanets);

        // Use addDestinationInfo() to add the information of the selected planet to the mission target
        addDestinationInfo(
            document,
            selectedPlanet.name,
            selectedPlanet.diameter,
            selectedPlanet.star,
            selectedPlanet.distance,
            selectedPlanet.moons,
            selectedPlanet.image
        );
    });
});

/*  window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(planetsResponse);

    // Once the data is fetched, continue execution
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const randomPlanet = pickPlanet(listedPlanets); // Call pickPlanet() to select a random planet
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.imageUrl
        ); // Call addDestinationInfo() to display the selected planet's information

        // Call formSubmission() with sample data to simulate form submission
        formSubmission(document, list, "Pilot Name", "Co-pilot Name", 10000, 5000);
    }).then(function () {
        console.log(listedPlanets);
    });
}); */