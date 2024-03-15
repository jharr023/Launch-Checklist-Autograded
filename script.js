
/* window.addEventListener("load", function() {
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
}); */
const { formSubmission, myFetch, pickPlanet, addDestinationInfo } = require('./scriptHelper');


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

        // Call formSubmission() with sample data to simulate form submission
        formSubmission(document, list, "Pilot Name", "Co-pilot Name", 10000, 5000);
    }).then(function () {
        console.log(listedPlanets);
    });
});