// Write your JavaScript code here.
// Remember to pay attention to page loading!

let topTracker = 0;
let leftTracker = 0;

window.addEventListener('load', function () {
   console.log('Its loaded!');
    





    document.getElementById('up').addEventListener('click', function () {
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topTracker = topTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px: position: relative;")  
    });

    document.getElementById('down').addEventListener('click', function () {
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topTracker = topTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative;")
    });

    document.getElementById('left').addEventListener('click', function () {
        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative;")
    });
    
    document.getElementById('right').addEventListener('click', function () {
        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; position: relative;")
    });


    document.getElementById('missionAbort').addEventListener('click', function () {
        let response = window.confirm("Confirm that you want to abort the mission.")
       if (response) {
        document.getElementById('flightStatus').innerText = "Mission aborted.";
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';
       }
    });

    document.getElementById('landing').addEventListener('click', function (){
        window.alert("The shuttle is landing. Landing gear Engaged");
        document.getElementById('flightStatus').innerText = "The shuttle is landed.";
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
        document.getElementById('spaceShuttleHeight').innerText = '0';

    })

    document.getElementById('takeoff').addEventListener('click', function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (response) {
            document.getElementById('flightStatus').innerText = "Shuttle in Flight";
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: blue;');
            document.getElementById('spaceShuttleHeight').innerText = '10000';
        }
 
     });



}); 
