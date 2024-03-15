const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); // Assuming myFetch() returns a promise that resolves with the list of planets

    // Once the data is fetched, continue execution
    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);

        // Select a random planet from the list of planets
        const randomPlanet = pickPlanet(listedPlanets);

        // Display the information of the selected planet
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.imageUrl
        );

        // Reload the page to see the mission target information
        location.reload();
    });
});