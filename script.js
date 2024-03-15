// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

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
    }).then(function () {
        console.log(listedPlanets);
    });
});