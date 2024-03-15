// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

w/*indow.addEventListener("load", function() {

    let listedPlanets = myFetch();
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });*/
 window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); // Step 1: Set listedPlanetsResponse equal to the value returned by calling myFetch()

    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;

        // Step 3: Use pickPlanet() to select a random planet from listedPlanets
        const randomPlanet = pickPlanet(listedPlanets);

        // Step 4: Pass the information of the selected planet to addDestinationInfo() to update the mission target div
        addDestinationInfo(
            document,
            randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.imageUrl
        );
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});